 (function (g, e, n, es, ys) {
    g['_genesysJs'] = e;
    g[e] = g[e] || function () {
      (g[e].q = g[e].q || []).push(arguments)
    };
    g[e].t = 1 * new Date();
    g[e].c = es;
    ys = document.createElement('script'); ys.async = 1; ys.src = n; ys.charset = 'utf-8'; document.head.appendChild(ys);
  })(window, 'Genesys', 'https://apps.mypurecloud.ie/genesys-bootstrap/genesys.min.js', {
    environment: 'euw1',
    deploymentId: '4b8061e8-0ef5-45c1-9987-720fa7045890'
  });
  Genesys("command", "Database.set", {
  messaging: {
    customAttributes: {
      Origin: "Mobile"
    }
  }
});

Genesys("subscribe", "Messenger.ready", function(){
  Genesys("command", "Messenger.open");
});