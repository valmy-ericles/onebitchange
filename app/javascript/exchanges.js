document.addEventListener('turbolinks:load', function() {
  document.getElementById('exchange_form').addEventListener('ajax:success', function(e) {
    let [result] = e.detail
    document.getElementById('result').value = result.value
  })
})