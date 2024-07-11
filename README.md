# Babies360
Babies360 is a service that give parents the possibility to ask for a variety of services, such as babysitting, party organization and pedagogical consultation. The platform will collect all the needed details and the game is done!

## Members:
* Alberto, Papiri, 10566115 
* Niloofar, Sasannia, 10888547
  
## Choreographed process
This BPMN Choreography diagram represents a service coordination between Parents and the Babies360 company. At the beginning Parents making an initial service request to Babies360. The company then checks for availability; if the availability doesn't match the parent’s needs, the process will end. Once there's a match, Babies360 requests additional information from the Parents. After obtaining the needed details, Babies360 allocates the appropriate resources, like a babysitter, party organizer, or pedagogical consultant(they can be parallel). Following the service delivery, Babies360 manages the payment process and issues a payment notification to the Parents, concluding the transaction.
![choreography diagram](processes/choreography.png?raw=true)

## Collaboration Diagram
![collaboration diagram](processes/collaboration.png?raw=true)

## PetriNet
![PetriNet](processes/PetriNet.png?raw=true)

## Executable process
![executable](processes/executable.png?raw=true)
### payment and feedback process
![executable_2](processes/executable_2.png?raw=true)

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