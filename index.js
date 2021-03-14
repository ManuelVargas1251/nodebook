console.log('🎈🥤🎈')
console.warn('🍓🎈🥗🍓🎈🍓')
console.info('🎈🎈')

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);