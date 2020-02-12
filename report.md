Software Apps Team Takehome - QA
================================================================================
Plenty takehome question for QA engineers.

<br>

Introduction
--------------------------------------------------------------------------------
Thank you for taking the time to complete this exercise which will give you an
opportunity to work on a (relatively) real-world problem on your time and at 
your own pace. 

For this exercise, you will be inspecting and testing the included test server 
and frontend that allow users to modify 24 hour temperature schedules for 
different rooms, which is an application that is directly relevant to our work 
at Plenty.

While you may consult online resources, please do not share this problem or
directly collaborate with others.

Please submit three files--`test_plan`, `automated_test`, and `report` as 
desribed below. A variety of common filetypes are appropriate for these files. 
If you end up modifying any of the source files, plese rezip the whole project 
and send it back as well. 

Thanks again for your time and have fun!

<br>

The Application
--------------------------------------------------------------------------------
Some background for the application is given below.

Plants are growing in various 'grow rooms' at a facility where each room has its
own environment and crop isolated from the other rooms. Plant Scientists would
like to control the room temperatures on a per-room basis.

Specifically, the Plant Science group has daily temperature schedules it would 
like to run in each room and has come to the software team for a tool that can:

 - Lookup a room in a UI to see the temperature schedule for that room
 - Specify that temperature schedule for each room from the same UI at the
   hourly level

Note that:

 - More detailed control beyond the hourly level is not necessary
 - The same 24 hour temperature schedule is used every day

One room may have more temperature changes scheduled than another so some rooms 
might have a temperature that changes only twice daily while others may have 
many temperature changes. Finally, the software will maintain the last set 
temperature for a room until a new temperature target is provided.

For this application, the schedules only need to be shown and modified for 
`Room1` and `Room2` but assume that more rooms may be added in the future.

<br>

Endpoints
--------------------------------------------------------------------------------
The following endpoints exist in the application.

 - `GET /` which will render the `schedule.html` template
 - `GET /schedules.json` will return all rooms and their scheduls in a JSON
   document
 - `GET /schedule/<room name>.json` will return the schedule for the given room
   or a 404 if there is no known room by that name
 - `POST /schedule/<room name>.json` will update the schedule for the given room
   where the body of the request should be a JSON schedule as described below

<br>

Example Schedule
--------------------------------------------------------------------------------
Here is an example of what a schedule looks like:

```JSON
{
    "commands": [
        {
            "time": "09:00:00Z",
            "target": 70
        },
        {
            "time": "18:00:00Z",
            "target": 65
        }
    ]
}
```

In this schedule, the temperature is set to 70°F at 9am UTC and stays at 70°F
until 6pm UTC, at which point the temperature drops to 65°F. The temperature will
stay 65°F until 9am the following morning.

<br>

Your Tasks
--------------------------------------------------------------------------------
Your tasks (if you choose to accept them) are below. Please submit the results
in the files mentioned, with any appropriate filetype (e.g. `.zip`, `.txt`, 
`.docx`, `.py`, etc.).

##### Manual Testing in `test_plan` File
- Write an outline for a test plan for the service. Don't worry about putting 
too much detail into it, and feel free to use any templates you think are
appropriate. We're looking for an outline of a test plan only--not the full 
document.
- Create manual test cases to test the project. Please create one complete and 
thorough test case for each of the service and the UI, and then some other 
high-level cases. 
- Manually test the service against the (short) specification and description
of problem above. In other words, execute the test cases you created 
previously. For any bugs you find (discrepancies, usability issues, missing 
features, errors, etc.) please create a complete defect report.
- Based on the described service structure, please mention some tools you could 
use to review the performance of the application.

##### Automated Testing in `automated_test` File (or Zipped Folder)
- Implement some automated tests to review the UI. Use whatever commonly 
available testing framework you are comfortable with (just make sure it's clear 
to us how to run the tests).
- Implement some automated tests to review backend service. Use whatever 
commonly available testing framework you are comfortable with (just make sure 
it's clear to us how to run the tests).
- Please be sure to send us any relevant source code.

##### Task Report in `report` File
- Write a summary of what you've done, explaining your overall manual and 
automated testing strategy, why you chose the tools and methodologies that you 
did, etc.
- Send us an email with the three artifacts!

<br>

Getting Started
--------------------------------------------------------------------------------
You will need `Python 3` and `Flask` to complete this exercise. To get Python, 
[checkout this guide](http://docs.python-guide.org/en/latest/starting/installation/). 
To get `Flask`, use `pip`, Python's default package manager. This command will 
get and install all of the server's dependencies.
```
pip install -r requirements.txt
```

You will also need `npm` to run the frontend, which can be installed for your 
system based on instructions [here](https://nodejs.org/en/).

<br>

Project Structure and Usage
--------------------------------------------------------------------------------
The backend server is in `server.py`. Run this server locally on port 8080 with 
```
python server.py
```

The frontend code is in the `client` folder. Once the backend server is 
running, run
```
npm install
npm start
```
to start the full frontend application on port 3000.

A few additional commands that might be useful:
- Some developer-written backend unit tests can be run with `python test.py`
- To make a real frontend build, use `npm run build` in the `client/` directory
- Developer-written frontend unit tests can be run with `npm run test` in the `client/` directory
