import express from 'express'
import routes from './routes/routes'
import handleNotFoundRoutes from './middlewares/handleNotFoundRoutes'
import globalErrorHandler from './middlewares/globalErrorHandler'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', routes)

// not found error handler
app.use(handleNotFoundRoutes)

// global error handling
app.use(globalErrorHandler)


export default app
