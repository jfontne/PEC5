# a) ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?
* **FormControl** Hace referencia a un congrold el formulario, por ejemplo un input.
* **FormGroup** Podemos agrupar todo el conjunto de controles en una sola variable.
* **FormBuilder** Nos permite inicializar los controles con un valor y las validaciones que lo queremos aplicar.
# b) Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.
| validador | explicación |
|-----------|-------------|
| min(min: number) | Definir un numérico mínimo  |
| max(max: number) | Definir un númérico máximo |
| required | Definir el control como obligatorio |
| email | Control de email, sólo acepta formatos correctos de email |
| minLength(minLength: number) | Definir el mínimo de carácteres de un control |
| maxLength(maxLength: number) | Definir el máximo de carácteres de un control |
| pattern(pattern: string \| RegExp) | Definir un RegExp o expresión para comprovar que la entrada sigue unas normativas establecidas |

Resumen:
~~~
class Validators {
  static min(min: number): ValidatorFn
  static max(max: number): ValidatorFn
  static required(control: AbstractControl<any, any>): ValidationErrors | null
  static requiredTrue(control: AbstractControl<any, any>): ValidationErrors | null
  static email(control: AbstractControl<any, any>): ValidationErrors | null
  static minLength(minLength: number): ValidatorFn
  static maxLength(maxLength: number): ValidatorFn
  static pattern(pattern: string | RegExp): ValidatorFn
  static nullValidator(control: AbstractControl<any, any>): ValidationErrors | null
  static compose(validators: ValidatorFn[]): ValidatorFn | null
  static composeAsync(validators: AsyncValidatorFn[]): AsyncValidatorFn | null
}
~~~



# c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?

## Estados de validación de los controles

* VALID: el control ha superado todos las validaciones.
* INVALID: el control no ha superado al menos una de las reglas de validación.
* PENDING: el control está esperando un proceso de validación normalmente asíncrono.
* DISABLED: el control está desactivado y exento de validación.

## Estados de modificación

* PRINSTINE: el valor del control no ha sido cambiado por el usuario.
* DIRTY: el usuario ha modificado el valor del control.
* TOUCHED: el usuario ha tocado el control.
* UNTOUCHED: el usuario no ha tocado y salido del control.