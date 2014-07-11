Meteor.startup(function () {
  enviroment = process.env.NODE_ENV;
  if (enviroment == 'development') {

    if (Roles.getAllRoles().count() === 0) {
      Roles.createRole('superadmin');
      Roles.createRole('admin');
      Roles.createRole('assessor');
      Roles.createRole('employer');
      Roles.createRole('learner');
    }
    
  }
});
