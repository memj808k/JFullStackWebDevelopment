import '../sass/style.scss'

process.env.NODE_ENV !== 'production'
    ? ()=> console.log('*** Running development mode')
    : ()=> console.log('*** Running production mode')

console.log("*** Personal page ***");