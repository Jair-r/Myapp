import React, { useState } from 'react';

import {
  View,
  Text,
  FlatList,
  Pressable,
  TextInput,
  Switch,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ========================================
// 1. CATÁLOGO LOCAL DE CURSOS
// ========================================

const cursos = [
  {
    id: '1',
    nombre: 'React Native',
    horas: 20,
    descripcion: 'Desarrollo de aplicaciones móviles.',
  },
  {
    id: '2',
    nombre: 'Diseño Web',
    horas: 18,
    descripcion: 'Creación de interfaces para sitios web.',
  },
  {
    id: '3',
    nombre: 'Ofimática',
    horas: 16,
    descripcion:
      'Uso de documentos, presentaciones y hojas de cálculo.',
  },
  {
    id: '4',
    nombre: 'Marketing Digital',
    horas: 12,
    descripcion: 'Estrategias de comunicación digital.',
  },
];

const Stack = createNativeStackNavigator();

// ========================================
// 2. PANTALLA INICIO
// ========================================

function InicioScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Pressable
      style={styles.cursoCard}
      onPress={() =>
        navigation.navigate('Detalle', {
          curso: item,
        })
      }
    >
      <View style={styles.cursoInfo}>
        <Text style={styles.cursoNombre}>
          {item.nombre}
        </Text>

        <Text style={styles.cursoHoras}>
          {item.horas} horas
        </Text>
      </View>

      <Text style={styles.flecha}>›</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Catálogo de Cursos
      </Text>

      <Text style={styles.subtitulo}>
        Selecciona un curso para conocer sus detalles.
      </Text>

      <FlatList
        data={cursos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />

      <Text style={styles.pie}>
        Cursos disponibles: {cursos.length}
      </Text>
    </View>
  );
}

// ========================================
// 3. PANTALLA DETALLE Y FORMULARIO
// ========================================

function DetalleScreen({ route }) {
  const { curso } = route.params;

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaCondiciones, setAceptaCondiciones] =
    useState(false);

  // ========================================
  // 4. VALIDACIONES Y CONFIRMACIÓN
  // ========================================

  const confirmarInteres = () => {
    if (nombre.trim() === '') {
      Alert.alert(
        'Campo obligatorio',
        'Por favor, escribe tu nombre.'
      );
      return;
    }

    if (
      correo.trim() === '' ||
      !correo.includes('@')
    ) {
      Alert.alert(
        'Correo inválido',
        'Escribe un correo que contenga el carácter @.'
      );
      return;
    }

    if (!aceptaCondiciones) {
      Alert.alert(
        'Condiciones pendientes',
        'Debes aceptar las condiciones para continuar.'
      );
      return;
    }

    Alert.alert(
      '¡Registro simulado correctamente!',
      `Nombre: ${nombre.trim()}\nCurso: ${curso.nombre}\n\nTu interés ha sido registrado de forma simulada.`,
      [
        {
          text: 'Aceptar',
          onPress: () => {
            setNombre('');
            setCorreo('');
            setAceptaCondiciones(false);
          },
        },
      ]
    );
  };

  return (
    <ScrollView
      style={styles.detalleScroll}
      contentContainerStyle={styles.detalleContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.detalleCard}>
        <Text style={styles.etiqueta}>
          CURSO SELECCIONADO
        </Text>

        <Text style={styles.detalleTitulo}>
          {curso.nombre}
        </Text>

        <View style={styles.horasBadge}>
          <Text style={styles.horasTexto}>
            {curso.horas} horas de duración
          </Text>
        </View>

        <Text style={styles.seccionTitulo}>
          Descripción
        </Text>

        <Text style={styles.descripcion}>
          {curso.descripcion}
        </Text>
      </View>

      <View style={styles.formularioCard}>
        <Text style={styles.formularioTitulo}>
          Formulario de interés
        </Text>

        <Text style={styles.label}>
          Nombre completo
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
          value={nombre}
          onChangeText={setNombre}
          autoCapitalize="words"
          returnKeyType="next"
        />

        <Text style={styles.label}>
          Correo electrónico
        </Text>

        <TextInput
          style={styles.input}
          placeholder="ejemplo@correo.com"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
        />

        <View style={styles.condicionesFila}>
          <Text style={styles.condicionesTexto}>
            Acepto las condiciones
          </Text>

          <Switch
            value={aceptaCondiciones}
            onValueChange={setAceptaCondiciones}
            trackColor={{
              false: '#BDBDBD',
              true: '#81C784',
            }}
            thumbColor={
              aceptaCondiciones ? '#2E7D32' : '#F4F3F4'
            }
          />
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado,
          ]}
          onPress={confirmarInteres}
        >
          <Text style={styles.botonTexto}>
            Confirmar interés
          </Text>
        </Pressable>

        <Text style={styles.aviso}>
          Este formulario solamente simula el registro.
          No se guardan ni se envían datos.
        </Text>
      </View>
    </ScrollView>
  );
}

// ========================================
// 5. NAVEGACIÓN PRINCIPAL
// ========================================

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1565C0',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: '#F3F6FA',
          },
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
          options={{
            title: 'Catálogo de Cursos',
          }}
        />

        <Stack.Screen
          name="Detalle"
          component={DetalleScreen}
          options={{
            title: 'Detalle del curso',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ========================================
// 6. ESTILOS
// ========================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3F6FA',
  },

  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#17365D',
    marginTop: 10,
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 15,
    color: '#607080',
    marginBottom: 22,
    lineHeight: 22,
  },

  lista: {
    paddingBottom: 15,
  },

  cursoCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginBottom: 13,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E1E8F0',
    elevation: 2,
  },

  cursoInfo: {
    flex: 1,
  },

  cursoNombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#17365D',
    marginBottom: 6,
  },

  cursoHoras: {
    fontSize: 14,
    color: '#607080',
  },

  flecha: {
    fontSize: 32,
    color: '#1565C0',
    marginLeft: 10,
  },

  pie: {
    textAlign: 'center',
    color: '#607080',
    marginTop: 8,
    marginBottom: 5,
  },

  detalleScroll: {
    flex: 1,
    backgroundColor: '#F3F6FA',
  },

  detalleContainer: {
    padding: 18,
    paddingBottom: 35,
  },

  detalleCard: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#E1E8F0',
    elevation: 2,
  },

  etiqueta: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1565C0',
    letterSpacing: 1.2,
    marginBottom: 10,
  },

  detalleTitulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#17365D',
    marginBottom: 14,
  },

  horasBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E3F2FD',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 20,
  },

  horasTexto: {
    color: '#1565C0',
    fontSize: 14,
    fontWeight: 'bold',
  },

  seccionTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#17365D',
    marginBottom: 8,
  },

  descripcion: {
    fontSize: 15,
    color: '#526273',
    lineHeight: 23,
  },

  formularioCard: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E1E8F0',
    elevation: 2,
  },

  formularioTitulo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#17365D',
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#34495E',
    marginBottom: 8,
  },

  input: {
    height: 49,
    borderWidth: 1,
    borderColor: '#CFD8E3',
    borderRadius: 10,
    paddingHorizontal: 13,
    marginBottom: 18,
    backgroundColor: '#FAFCFF',
    fontSize: 15,
    color: '#263238',
  },

  condicionesFila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 22,
  },

  condicionesTexto: {
    fontSize: 15,
    color: '#34495E',
  },

  boton: {
    backgroundColor: '#1565C0',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botonPresionado: {
    backgroundColor: '#0D47A1',
    opacity: 0.85,
  },

  botonTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  aviso: {
    marginTop: 15,
    fontSize: 12,
    color: '#7B8794',
    textAlign: 'center',
    lineHeight: 18,
  },
});