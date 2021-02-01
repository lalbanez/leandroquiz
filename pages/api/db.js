/* eslint-disable linebreak-style */
import db from '../../db.json';

export default function handle(request, response) {
  response.json(db);
}
