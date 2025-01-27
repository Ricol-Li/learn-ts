(function () {
  'use strict';

  const a = 'hello';
  console.log(a);
  var Role;
  (function (Role) {
      Role[Role["ADMIN"] = 1] = "ADMIN";
      Role[Role["USER"] = 2] = "USER";
  })(Role || (Role = {}));
  console.log(Role[1]);

})();
//# sourceMappingURL=bundle.js.map
