import morgan from 'morgan'

export  default morgan(':method :url :status :res[content-length] :req[header] :req[params] :response-time ms')