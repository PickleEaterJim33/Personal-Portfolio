import React from "react";
import './WebProjects.scss';
import Web from "./Web";

function WebProjects() {
    return (
        <>
            <p
                style={{
                    position: 'absolute',
                    right: '0',
                    margin: '0',
                    fontSize: '13px',
                    fontStyle: 'italic',
                    color: 'grey',
                    padding: '5px 5px 0 0'
                }}
            >
                *some hosted projects and services<br></br> might need some time to wake up and load
            </p>
            <br></br>
            <div id="web_projects_wrapper">
                <Web
                    link={"https://pm-pickle.firebaseapp.com/"}
                    name="Project Management App"
                    screenshot={"https://learn.g2crowd.com/hubfs/iStock-1135541613.jpg"}
                    alt={"project-management-app"}
                    source={"https://github.com/PickleEaterJim33/Project-Management-Client"}
                    sourceComment={"api link and test users in README"}
                />
                <Web
                    link={"https://imgup-pickle.firebaseapp.com/"}
                    name="Image Upload App"
                    screenshot={"https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"}
                    alt={"image-upload-app"}
                    source={"https://github.com/PickleEaterJim33/Image-Upload-Client"}
                    sourceComment={"api link in README"}
                />
                <Web
                    link={"https://pickle-chat.onrender.com"}
                    name="Socket.io Chat Demo"
                    screenshot={"https://miro.medium.com/max/1400/1*tWm33yhceKIL22QqOORu2w.png"}
                    alt={"pickle-chat"}
                    source={"https://github.com/PickleEaterJim33/Socket-Chat-Demo"}
                    sourceComment={"todo: add more features"}
                />
                <Web
                    link={"https://pickle-stripe.onrender.com"}
                    name="Stripe Payment Demo"
                    screenshot={"https://pbs.twimg.com/profile_images/1503494829094756357/ihaECs5p_400x400.jpg"}
                    alt={"stripe-payment-demo"}
                    source={"https://github.com/PickleEaterJim33/Stripe-Test-Payment"}
                    sourceComment={"use test cards"}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/PickleEaterJim33/quality-assurance-v7"}
                    name={"Quality Assurance\n+ backend and APIs"}
                    screenshot={"https://i.ibb.co/sqBP8LL/mocha-Chai.png"}
                    alt={"mocha-Chai"}
                    fccSources={[
                        'https://replit.com/@JanMlinaric/FCC-Metric-Imperial-Converter?v=1',
                        'https://replit.com/@JanMlinaric/FCC-Issue-Tracker?v=1',
                        'https://replit.com/@JanMlinaric/FCC-Personal-Library?v=1',
                        'https://replit.com/@JanMlinaric/FCC-Sudoku-Solver?v=1',
                        'https://replit.com/@JanMlinaric/FCC-American-British-Translator?v=1'
                    ]}
                    fccComments={[
                        'Metric-Imperial Converter',
                        'Issue Tracker',
                        'Personal Library',
                        'Sudoku Solver',
                        'American-British Translator'
                    ]}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/PickleEaterJim33/back-end-development-and-apis"}
                    name={"Backend and APIs"}
                    screenshot={"https://i.ibb.co/LYcf0J1/node-Express-Mongodb.png"}
                    alt={"node-Express-Mongodb"}
                    fccSources={[
                        'https://replit.com/@JanMlinaric/FCC-Timestamp-Project?v=1',
                        'https://replit.com/@JanMlinaric/FCC-Headparser-Project?v=1',
                        'https://replit.com/@JanMlinaric/FCC-URL-Shortener-Project?v=1',
                        'https://replit.com/@JanMlinaric/FCC-Exercise-Tracker-Project?v=1',
                        'https://replit.com/@JanMlinaric/FCC-File-Metadata-Project?v=1'
                    ]}
                    fccComments={[
                        'Timestamp Microservice',
                        'Request Header Parser Microservice',
                        'URL Shortener Microservice',
                        'Exercise Tracker',
                        'File Metadata Microservice'
                    ]}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/PickleEaterJim33/relational-database-v8"}
                    name={"Relational Database"}
                    screenshot={"https://i.ibb.co/NTcfnPj/image-1.png"}
                    alt={"psql-Bash-Git"}
                    fccSources={[
                        'https://github.com/PickleEaterJim33/FCC/blob/main/Celestial%20Bodies%20Database/universe.sql',
                        'https://github.com/PickleEaterJim33/FCC/tree/main/World%20Cup%20Database',
                        'https://github.com/PickleEaterJim33/FCC/tree/main/Salon%20Appointment%20Scheduler',
                        'https://github.com/PickleEaterJim33/Periodic-Table-FCC',
                        'https://github.com/PickleEaterJim33/Number-Guessing-Game-FCC'
                    ]}
                    fccComments={[
                        'Celestial Bodies Database',
                        'World Cup Database',
                        'Salon Appointment Scheduler',
                        'Periodic Table Database',
                        'Number Guessing Game'
                    ]}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/PickleEaterJim33/data-visualization"}
                    name={"Data Visualization"}
                    screenshot={"https://cdn.dribbble.com/users/22018/screenshots/2456036/d3.png"}
                    alt={"d3"}
                    fccSources={[
                        'https://codepen.io/pickleeaterjim33/full/xxjpOZq',
                        'https://codepen.io/pickleeaterjim33/full/LYmeOjO',
                        'https://codepen.io/pickleeaterjim33/full/yLjpmLV',
                        'https://codepen.io/pickleeaterjim33/full/xxjYagY',
                        'https://codepen.io/pickleeaterjim33/full/eYrVaNr'
                    ]}
                    fccComments={[
                        'Bar Chart',
                        'Scatterplot Graph',
                        'Heat Map',
                        'Choropleth Map',
                        'Treemap Diagram'
                    ]}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/PickleEaterJim33/front-end-development-libraries"}
                    name={"Frontend Libraries"}
                    screenshot={"https://i.ibb.co/JxVL3KK/frontend.png"}
                    alt={"frontend"}
                    fccSources={[
                        'https://codepen.io/pickleeaterjim33/full/yLjbzxo',
                        'https://codepen.io/pickleeaterjim33/full/dyeWrrM',
                        'https://codepen.io/pickleeaterjim33/full/poVrrmm',
                        'https://codepen.io/pickleeaterjim33/full/ZEoXZzr',
                        'https://codepen.io/pickleeaterjim33/full/PoeOZoP'
                    ]}
                    fccComments={[
                        'Random Quote Machine',
                        'Markdown Previewer',
                        'Drum Machine',
                        'JavaScript Calculator',
                        '25 + 5 Clock'
                    ]}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/PickleEaterJim33/javascript-algorithms-and-data-structures"}
                    name={"JavaScript Algorithms\nand Data Structures"}
                    screenshot={"https://i.ibb.co/vXVxzjy/javascript.png"}
                    alt={"javascript"}
                    source={"https://www.freecodecamp.org/certification/PickleEaterJim33/javascript-algorithms-and-data-structures"}
                    sourceComment={"practice projects at same link"}
                />
                <Web
                    link={"https://www.freecodecamp.org/certification/PickleEaterJim33/responsive-web-design"}
                    name={"Responsive Web Design"}
                    screenshot={"https://i.ibb.co/xJwt4G0/htmlCss.png"}
                    alt={"html-Css"}
                    source={"https://www.freecodecamp.org/certification/PickleEaterJim33/responsive-web-design"}
                    sourceComment={"practice projects at same link"}
                />
            </div>
        </>
    );
}

export default WebProjects;
