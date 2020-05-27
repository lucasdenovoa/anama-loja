import React from 'react';

import ItemBeneficio from '../../components/Item/Beneficio';

const Beneficios = () => (
    <div className="Beneficios">
        <div className="container flex horizontal-mb wrap-mb">
        <ItemBeneficio 
                icone="fa-lock" 
                texto="Segurança" />
            <ItemBeneficio 
                icone="fa-truck" 
                texto="Praticidade e confiança" />
            <ItemBeneficio 
                icone="fa-recycle" 
                texto="Trabalho Sustentável" />
            <ItemBeneficio 
                icone="fa-check" 
                texto="Atendimento de Qualidade" />
        </div>
    </div>
)

export default Beneficios;
