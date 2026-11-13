# API Contract

## Tasks
| Method | Endpoint | Success | Errors |
|---|---|---|---|
| GET | /api/tasks | 200 | 401 |
| GET | /api/tasks/:id | 200 | 401, 404 |
| POST | /api/tasks | 201 | 400, 401 |
| PUT | /api/tasks/:id | 200 | 400, 401, 404 |
| DELETE | /api/tasks/:id | 200 | 401, 404 |

## Users
| Method | Endpoint | Success | Errors |
|---|---|---|---|
| GET | /api/users | 200 | 401, 403 |
| GET | /api/users/:id | 200 | 401, 404 |
| POST | /api/users | 201 | 400, 403 |
| PUT | /api/users/:id | 200 | 400, 403, 404 |
| DELETE | /api/users/:id | 200 | 403, 404 |
