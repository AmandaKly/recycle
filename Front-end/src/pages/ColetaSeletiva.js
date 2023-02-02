import Cabecalho from "../components/Cabecalho"

function ColetaSeletiva(){
    return(
        <>
        <Cabecalho/>
        <main>
            <div id="pontos">
                        <h1 className='header'>Coleta Seletiva</h1>
                        </div>
                <div id="coletaseletiva">
                    
                        <div id="tabela">
                           <table>
                            <tr>
                            <th>Dias</th>
                            <th>Bairros</th>
                            <th>Horario</th>
                            </tr>
                            <tr>
                                <td>Segunda</td> 
                                <td>Manoel Salustino</td>
                                <td>10:00</td>
                            </tr>
                            <tr>
                                <td>Terça</td>
                                <td>Silvio Bezerra e Parque das Pedras</td>
                                <td>10:00</td>
                            </tr>
                            <tr>
                                <td>Quarta</td>
                                <td>Centro e Santa Maria Gorete</td>
                                <td>10:00</td>
                            </tr>
                            <tr>
                                <td>Quinta</td>
                                <td>Gilberto Pinheiro e Antônio Rafael</td>
                                <td>11:00</td>
                            </tr>
                            <tr>
                                <td>Sexta</td>
                                <td>Centro Comercial</td>
                                <td>11:30</td>
                            </tr>

                           </table>

                        </div>


                        </div>

            </main>
        </>
    )
}
export default ColetaSeletiva;