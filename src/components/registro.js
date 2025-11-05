import React, { useState } from 'react';
import '../css/registro.css';

function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    region: '',
    password: '',
    confirmPassword: ''
  });

  const [errores, setErrores] = useState({});
  const [registroExitoso, setRegistroExitoso] = useState(false);

  // 🇨🇱 Regiones de Chile
const regiones = [
  'Región de Arica y Parinacota',
  'Región de Tarapacá',
  'Región de Antofagasta',
  'Región de Atacama',
  'Región de Coquimbo',
  'Región de Valparaíso',
  'Región Metropolitana',
  "Región del Libertador General Bernardo O'Higgins",  // ✅ CORREGIDO
  'Región del Maule',
  'Región de Ñuble',
  'Región del Biobío',
  'Región de La Araucanía',
  'Región de Los Ríos',
  'Región de Los Lagos',
  'Región de Aysén',
  'Región de Magallanes'
];

  // ✅ Validaciones
  const validarFormulario = () => {
    const nuevosErrores = {};

    // Validar nombre
    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    } else if (formData.nombre.length < 2) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar apellido
    if (!formData.apellido.trim()) {
      nuevosErrores.apellido = 'El apellido es obligatorio';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      nuevosErrores.email = 'El email es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      nuevosErrores.email = 'Email inválido';
    }

    // Validar teléfono (formato chileno)
    const telefonoRegex = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;
    if (!formData.telefono) {
      nuevosErrores.telefono = 'El teléfono es obligatorio';
    } else if (!telefonoRegex.test(formData.telefono.replace(/\s/g, ''))) {
      nuevosErrores.telefono = 'Formato de teléfono inválido (ej: +56912345678)';
    }

    // Validar dirección
    if (!formData.direccion.trim()) {
      nuevosErrores.direccion = 'La dirección es obligatoria';
    }

    // Validar ciudad
    if (!formData.ciudad.trim()) {
      nuevosErrores.ciudad = 'La ciudad es obligatoria';
    }

    // Validar región
    if (!formData.region) {
      nuevosErrores.region = 'Debe seleccionar una región';
    }

    // Validar contraseña
    if (!formData.password) {
      nuevosErrores.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      nuevosErrores.password = 'La contraseña debe tener al menos 6 caracteres';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      nuevosErrores.password = 'Debe contener mayúsculas, minúsculas y números';
    }

    // Validar confirmación de contraseña
    if (formData.password !== formData.confirmPassword) {
      nuevosErrores.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // 📤 Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      // Guardar en localStorage (simulación)
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      
      // Verificar si el email ya existe
      const emailExiste = usuarios.find(u => u.email === formData.email);
      if (emailExiste) {
        setErrores({ email: 'Este email ya está registrado' });
        return;
      }

      // Agregar nuevo usuario
      const nuevoUsuario = {
        id: Date.now(),
        ...formData,
        fechaRegistro: new Date().toISOString(),
        rol: 'cliente'
      };
      
      // No guardar la contraseña en texto plano (solo para demo)
      delete nuevoUsuario.password;
      delete nuevoUsuario.confirmPassword;
      
      usuarios.push(nuevoUsuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      
      setRegistroExitoso(true);
      
      // Limpiar formulario después de 3 segundos
      setTimeout(() => {
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
          direccion: '',
          ciudad: '',
          region: '',
          password: '',
          confirmPassword: ''
        });
        setRegistroExitoso(false);
      }, 3000);
    }
  };

  // 🔄 Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo al escribir
    if (errores[name]) {
      setErrores(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="registro-container">
      <div className="registro-header">
        <h1>📝 Registro de Usuario</h1>
        <p>Completa el formulario para crear tu cuenta en HuertoHogar</p>
      </div>

      {/* ✅ Mensaje de éxito */}
      {registroExitoso && (
        <div className="alert alert-success">
          <strong>¡Registro exitoso!</strong> Tu cuenta ha sido creada correctamente.
        </div>
      )}

      <form onSubmit={handleSubmit} className="registro-form">
        {/* 👤 DATOS PERSONALES */}
        <div className="form-section">
          <h3>👤 Datos Personales</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label>Nombre *</label>
              <input
                type="text"
                name="nombre"
                className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                placeholder="Juan"
                value={formData.nombre}
                onChange={handleChange}
              />
              {errores.nombre && <span className="error-message">{errores.nombre}</span>}
            </div>

            <div className="form-group">
              <label>Apellido *</label>
              <input
                type="text"
                name="apellido"
                className={`form-control ${errores.apellido ? 'is-invalid' : ''}`}
                placeholder="Pérez"
                value={formData.apellido}
                onChange={handleChange}
              />
              {errores.apellido && <span className="error-message">{errores.apellido}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errores.email ? 'is-invalid' : ''}`}
                placeholder="juan@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errores.email && <span className="error-message">{errores.email}</span>}
            </div>

            <div className="form-group">
              <label>Teléfono *</label>
              <input
                type="tel"
                name="telefono"
                className={`form-control ${errores.telefono ? 'is-invalid' : ''}`}
                placeholder="+56912345678"
                value={formData.telefono}
                onChange={handleChange}
              />
              {errores.telefono && <span className="error-message">{errores.telefono}</span>}
            </div>
          </div>
        </div>

        {/* 📍 DIRECCIÓN */}
        <div className="form-section">
          <h3>📍 Dirección de Entrega</h3>
          
          <div className="form-group">
            <label>Dirección *</label>
            <input
              type="text"
              name="direccion"
              className={`form-control ${errores.direccion ? 'is-invalid' : ''}`}
              placeholder="Av. Libertador 1234"
              value={formData.direccion}
              onChange={handleChange}
            />
            {errores.direccion && <span className="error-message">{errores.direccion}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Ciudad *</label>
              <input
                type="text"
                name="ciudad"
                className={`form-control ${errores.ciudad ? 'is-invalid' : ''}`}
                placeholder="Santiago"
                value={formData.ciudad}
                onChange={handleChange}
              />
              {errores.ciudad && <span className="error-message">{errores.ciudad}</span>}
            </div>

            <div className="form-group">
              <label>Región *</label>
              <select
                name="region"
                className={`form-control ${errores.region ? 'is-invalid' : ''}`}
                value={formData.region}
                onChange={handleChange}
              >
                <option value="">Selecciona una región</option>
                {regiones.map((region, index) => (
                  <option key={index} value={region}>{region}</option>
                ))}
              </select>
              {errores.region && <span className="error-message">{errores.region}</span>}
            </div>
          </div>
        </div>

        {/* 🔒 CONTRASEÑA */}
        <div className="form-section">
          <h3>🔒 Seguridad</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label>Contraseña *</label>
              <input
                type="password"
                name="password"
                className={`form-control ${errores.password ? 'is-invalid' : ''}`}
                placeholder="Mínimo 6 caracteres"
                value={formData.password}
                onChange={handleChange}
              />
              {errores.password && <span className="error-message">{errores.password}</span>}
            </div>

            <div className="form-group">
              <label>Confirmar Contraseña *</label>
              <input
                type="password"
                name="confirmPassword"
                className={`form-control ${errores.confirmPassword ? 'is-invalid' : ''}`}
                placeholder="Repite tu contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errores.confirmPassword && <span className="error-message">{errores.confirmPassword}</span>}
            </div>
          </div>

          <div className="password-requirements">
            <p>La contraseña debe contener:</p>
            <ul>
              <li className={formData.password.length >= 6 ? 'valid' : ''}>
                ✓ Mínimo 6 caracteres
              </li>
              <li className={/[A-Z]/.test(formData.password) ? 'valid' : ''}>
                ✓ Al menos una mayúscula
              </li>
              <li className={/[a-z]/.test(formData.password) ? 'valid' : ''}>
                ✓ Al menos una minúscula
              </li>
              <li className={/\d/.test(formData.password) ? 'valid' : ''}>
                ✓ Al menos un número
              </li>
            </ul>
          </div>
        </div>

        {/* 🚀 BOTÓN ENVIAR */}
        <button type="submit" className="btn-submit">
          🌱 Crear Cuenta
        </button>
      </form>
    </div>
  );
}

export default Registro;