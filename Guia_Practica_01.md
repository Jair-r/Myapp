# UNIVERSIDAD NACIONAL AUTÓNOMA DE NICARAGUA - LEÓN
## FACULTAD DE CIENCIAS Y TECNOLOGÍAS
### DEPARTAMENTO DE COMPUTACIÓN

**DESARROLLO DE APPS MULTIDISPOSITIVO I**  
**GUÍA PRÁCTICA N.º 1 — Creación de la primera aplicación móvil con React Native, Expo, JavaScript y JSX**

**Estudiante:** Jair Smir Ramírez Delgadillo  
**Carrera:** Ingeniería en Tecnologías de la Información  
**Fecha:** ____________________  
**Docente:** ____________________

---

## 1. Propósito
Crear y ejecutar una aplicación móvil multiplataforma con React Native y Expo usando JavaScript y JSX, reconocer la estructura del proyecto y modificar la interfaz con componentes y estilos básicos.

## 2. Requisitos
- Node.js LTS
- Visual Studio Code
- Expo Go instalado en Android
- Conexión a Internet

## 3. Procedimiento desde cero

### Paso 1. Instalar Node.js
Descarga Node.js LTS desde https://nodejs.org/ e instala con las opciones predeterminadas. Abre CMD o la terminal de VS Code y comprueba:
```bash
node -v
npm -v
```
Deben mostrarse números de versión.

### Paso 2. Instalar Visual Studio Code
Descárgalo desde https://code.visualstudio.com/ e instálalo.

### Paso 3. Instalar Expo Go
Desde Google Play busca e instala Expo Go: https://expo.dev/go

### Paso 4. Crear carpeta y proyecto
Crea una carpeta de trabajo llamada `DesarrolloAppsMultidispositivo`. Ábrela en VS Code mediante **Archivo → Abrir carpeta**. Abre **Terminal → New Terminal** y ejecuta:
```bash
npx create-expo-app@latest MiPrimeraApp --template blank
cd MiPrimeraApp
```
Si `code .` está habilitado, ejecútalo para abrir el proyecto; si no, abre la carpeta manualmente en VS Code.

### Paso 5. Reconocer la estructura
- `App.js`: componente principal y pantalla de la aplicación.
- `assets`: imágenes y recursos.
- `package.json`: información, scripts y dependencias.
- `node_modules`: librerías instaladas; no se edita manualmente.

### Paso 6. Ejecutar la app
Dentro de la carpeta del proyecto ejecuta:
```bash
npx expo start
```
Escanea el QR con Expo Go. Si no conecta, prueba:
```bash
npx expo start --tunnel
```
Es recomendable conectar teléfono y computadora a la misma red.

### Paso 7. Pegar el código final
Abre `App.js`, reemplaza el contenido por el archivo `App.js` que acompaña este documento y guarda con `Ctrl + S`. La app incluye imagen local, nombre, carrera, asignatura y botón con alerta.

### Paso 8. Personalizar
Puedes cambiar el título, colores, tamaño de letra y textos en `App.js`. La imagen utilizada está en `assets/icon.png`; puedes sustituirla por otra imagen PNG manteniendo el nombre.

## 4. Componentes utilizados
- **View:** contenedor que agrupa elementos.
- **Text:** muestra texto.
- **Image:** muestra una imagen local.
- **Pressable:** responde al toque del usuario.
- **Alert.alert():** presenta un mensaje emergente.
- **StyleSheet.create():** organiza los estilos.
- **onPress:** indica la función que se ejecuta al presionar el botón.
- **JSX:** sintaxis para describir la interfaz dentro de JavaScript.

## 5. Preguntas de comprobación

**1. ¿Qué función cumple Expo durante el desarrollo?**  
Expo facilita crear, ejecutar y probar aplicaciones React Native, por ejemplo mediante Expo Go en un teléfono.

**2. ¿Para qué sirve App.js?**  
Es el archivo donde se define el componente principal y la interfaz de esta práctica.

**3. ¿Cuál es la diferencia entre View y Text?**  
`View` agrupa y organiza elementos; `Text` muestra texto en pantalla.

**4. ¿Por qué JSX no es HTML?**  
JSX es una sintaxis usada en JavaScript para describir interfaces. En React Native se utilizan componentes como `View` y `Text`, no etiquetas HTML como `div` y `p`.

**5. ¿Qué hace StyleSheet.create()?**  
Permite definir y organizar los estilos de los componentes.

**6. ¿Qué función cumple onPress?**  
Ejecuta una acción cuando el usuario presiona un componente interactivo.

**7. ¿Qué ventaja tiene un teléfono físico frente a un emulador?**  
Permite probar la interfaz y las interacciones directamente en un dispositivo real sin configurar un emulador.

## 6. Evidencias a entregar
- [ ] Captura de la aplicación funcionando en el teléfono.
- [ ] Captura del código `App.js`.
- [ ] Nombre del estudiante visible en la aplicación.
- [ ] Breve explicación de dos componentes utilizados.

## 7. Lista de verificación
- [ ] Título personalizado.
- [ ] Nombre y carrera.
- [ ] Nombre de la asignatura.
- [ ] Imagen local.
- [ ] Color de fondo modificado.
- [ ] Tamaño de letra modificado.
- [ ] Botón con `Pressable`.
- [ ] Alerta al presionar el botón.
- [ ] Aplicación ejecutada en el teléfono.

## 8. Solución de problemas
- **`node` no se reconoce:** instala Node.js y vuelve a abrir la terminal.
- **El QR no conecta:** usa la misma red o ejecuta `npx expo start --tunnel`.
- **Error en pantalla:** revisa la terminal y los paréntesis, llaves y etiquetas de `App.js`.
- **No encuentra la imagen:** comprueba que exista `assets/icon.png`.
- **Los cambios no aparecen:** guarda con `Ctrl + S` y recarga la aplicación.
- **Expo se detuvo:** inicia de nuevo con `npx expo start`.

## 9. Cierre
Se creó una aplicación básica de React Native con Expo, se ejecutó en un teléfono y se modificó la interfaz mediante JavaScript, JSX, componentes y estilos.
