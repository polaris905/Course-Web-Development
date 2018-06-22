+ RESTful ROUTES
  + REST: a patten of routes that is a mapping between HTTP routes and CRUD(creat, read, update, destroy)
  
| name    | url                   | verb   | description                                              |
| ------- | --------------------- | ------ | -------------------------------------------------------- |  
| INDEX   | /campgrounds          | GET    | Displays a list of campgrounds                           |
| NEW     | /campgrounds/new      | GET    | Displays a form to make a new campground                 |
| CREATE  | /campgrounds          | POST   | Add a new campground to DB, then redirect somewher       |
| SHOW    | /campgrounds/:id      | GET    | Shows info about one campground                          |
| EDIT    | /campgrounds/:id/edit | GET    | Shows edit form for one campground                       |
| UPDATE  | /campgrounds/:id      | PUT    | Update a particular campground, then redirect somewhere  |
| DESTROY | /campgrounds/:id      | DELETE | Delete a particular campground, then redirect somewhere  |
+ 网站资源
  + [Semantic UI，与bootstrap并行的另一个框架](https://www.semantic-ui.com)
