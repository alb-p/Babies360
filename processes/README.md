## Third party services

| Client                | Port  |
|-----------------------|-------|
| Babysitter            | 9091  |
| Party Organizer       | 9092  |
| Pedagogical Consultant| 9093  |


## How to run
- **Clients' servers**: navigate in each of *provider-server* folder and run `npm start`
- **Camunda**: start the Camunda container
- **BPMN excutable**: deploy all the components and start the main process. Make sure that the REST API outbound connectors have as URL your local device external IP (to find it run `if config` or similar tool)