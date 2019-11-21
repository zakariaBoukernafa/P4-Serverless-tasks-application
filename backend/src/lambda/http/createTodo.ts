import 'source-map-support/register'
import {APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult} from 'aws-lambda'
import {CreateTodoRequest} from '../../requests/CreateTodoRequest';
import {createToDo} from "../../businessLogic/ToDo";

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  // TODO: Implement creating a new TODO item
  console.log("Processing Event ", event);

  const newTodo: CreateTodoRequest = JSON.parse(event.body);
  const authorization = event.headers.Authorization;
  const split = authorization.split(' ');
  const jwtToken = split[1];

  const toDoItem = await createToDo(newTodo, jwtToken);

  return {
      statusCode: 201,
      headers: {
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        "item": toDoItem
      }),
  }
};
