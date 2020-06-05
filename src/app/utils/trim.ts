import {Validator} from 'class-validator'
// Validation methods
const validator = new Validator()

export default function trim<T>(model: T): T {
  for (const k of Object.keys(model)) {
    if (validator.isString(model[k]) && validator.isNotEmpty(model[k])) {
      model[k] = model[k].trim()
    }
  }

  return model
}
