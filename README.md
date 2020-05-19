# Modern Magic

Currently, Modern Magic is a social media website that allows users to create events/activities, join and chat about activities, upload photos to their user profile, follow other users, and view the activities and follower/followings of users.

The eventual goal of this app is to create a Magic: the Gathering strategic deck building website. The components in the playtest folder of the client-app folder give a sample of what the features to playtest a deck will look like. 

Due to the extra time it takes to develop in C#/ASP.NET, I have decided to first create an implementation of this goal using Node.js/Express for the backend. See https://github.com/codewithcarlos/mvp for progress updates on the Node app. Once I have completed a minimum viable product in Node, I plan on circling back to this project as it is already deployed and has some nice social media features that may come in handy.

## Technologies Used
<table>
  <tr>
    <th>Front-End</th>
    <th>Back-End</th>
    <th>Deployment</th>
    <th>APIs</th>
  </tr>
  <tr>
    <td><img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" alt="React" width="80px"></td>
    <td><img src="https://miro.medium.com/max/591/1*K8-NHsRRBuUpuzphdkZ6MQ.png" alt="ASP.Net Core" width="80px"></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1200px-DigitalOcean_logo.svg.png" alt="DigitalOcean" width="80px"></td>
    <td><img src="https://res.cloudinary.com/cloudinary/image/upload/new_cloudinary_logo_square.png" alt="Cloudinary" width="80px"></td>
  </tr>
  <tr>
    <td><img src="https://pbs.twimg.com/profile_images/1149708719178993664/3Hb8W4aX.png" alt="TypeScript" width="80px"></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" alt="MySQL" width="80px"></td>
    <td><img src="https://origin.jamesachambers.com/wp-content/uploads/2019/03/ubuntu-server.png" alt="Ubuntu Server" width="80px"></td>
    <td><img src="https://dotnet.microsoft.com/static/images/illustrations/swimlane-azure-signalr-logo.svg?v=ATzv682KgPlhAjLjmLD1uFwvk1t5VAYLnjXcIjDD99o" alt="SignalR" width="80px"></td>
  </tr>
  <tr>
    <td><img src="https://cdn-media-1.freecodecamp.org/images/1*TKvlTeNqtkp1s-eVB5Hrvg@2x.png" alt="React-Router" width="80px"></td>
    <td><img src="https://blog.ntsplhosting.com/wp-content/uploads/2013/08/parallel-linq-vs-simple-linq-in-asp-net.jpg" alt="LINQ" width="80px"></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td><img src="https://react.semantic-ui.com/logo.png" alt="Semantic-UI-React" width="80px"></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/1200px-C_Sharp_logo.svg.png" alt="C#" width="80px"></td>
    <td></td>
    <td></td>
  </tr>
    <tr>
    <td><img src="https://mobx.js.org/img/mobx.png" alt="MobX" width="80px"></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

### Front-End
- A combination of Semantic UI React and custom-built React components were used to display the UI. Also implemented media-responsive styling for all components.
- Routes and user flow were managed with React-Router. MobX was used for state management and TypeScript for static type-checking. 
- React Dropzone and React Cropper were used for user profile image uploads. React Final Form was used for creating new activities.

### Back-End
- Website was built using clean architectural design, ASP.NET Core MVC, and the CQRS + Mediator pattern. 
- Code First Migrations with LINQ and Entity Framework were used to seed MySQL database. 
- Obtained an A rating from SecurityHeaders site scan by adding Headers/features that enforce the use of HTTPS and help protect against things such as cross site scripting attacks, clickjacking, MIME-sniffing, etc.
- The app leverages JSON Web Tokens (JWT) as the URL-safe means of identifying a user.

### Deployment and APIs
- Incorporated Cloudinary as the cloud-based image platform to persist photos uploaded by users.
- SignalR was used for real-time chatting on events/activities.
- Published the app to Linux (Ubuntu server). 
- Purchase custom domain name and configured Apache to use an HTTPS SSL certificate.
