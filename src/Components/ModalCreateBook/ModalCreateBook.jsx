import React from "react";
import modalActions from "../../store/ShopModal/actions.js";
import { useDispatch } from "react-redux";
import './modalecreatebook.css';

const { renderModal } = modalActions;

export default function ModaleCreateBook({ onClose }){
    const dispatch = useDispatch()

    function handleCancel() {
        dispatch(renderModal({ state: "" }));
      }

      
    return(
        <section id="modalcreatebook">
            <div className="contForm">
           
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nombre del libro</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Categoria</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Descripción</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="contBtn">
                    <button onClick={onClose}>Cancelar</button>
                    <button>Agregar</button>
                </div>
                 
            </div>
        </section>
    )
}

