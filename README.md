# Babies360
Babies360 is a service that give parents the possibility to ask for a variety of services, such as babysitting, party organization and pedagogical consultation. The platform will collect all the needed details and the game is done!



## Members:
* Alberto, Papiri, 10566115 
* Niloofar, Sasannia, 10888547
  
## Choreographed process

This BPMN Choreography diagram represents service coordination between Parents, the Babies360 company, and the service providers. Initially, Parents make a service request to Babies360. The company checks for feasibility. If there's a match, Babies360 allocates the appropriate resources, such as a babysitter, party organizer, or pedagogical consultant. Following service delivery, Babies360 manages the payment process, issuing a payment notification to the Parents, paying the providers, and concluding the process by asking for feedback from the Parents.


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

## Project Information
The Babies360 project was developed for the Process and Service Design course at Politecnico di Milano in 2024 and has been evaluated with the highest score.
