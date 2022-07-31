import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transacciones: [],
  transaccionesDescripcion: [],
  montoFinal:0,
};

export const transaccionesSlice = createSlice({
  name: "transacciones",
  initialState,
  reducers: {
    setTransacciones: (state, action) => {
      const { payload } = action;
      console.log("setTransacciones", payload);
      state.transacciones = payload;
    },

    addTransaccion: (state, action) => {
      const { payload } = action;
      state.transacciones = [...state.transacciones, payload];
    },
    setTransaccionesDescripcion: (state, action) => {
      const { payload } = action;
      state.transaccionesDescripcion = payload;
    },
    setMontoFinal:(state, action)=>{
      const {payload}= action;
      state.montoFinal = payload
    }
  },
});

export const { setTransacciones, setTransaccionesDescripcion,addTransaccion, setMontoFinal } =
  transaccionesSlice.actions;
export default transaccionesSlice.reducer;
