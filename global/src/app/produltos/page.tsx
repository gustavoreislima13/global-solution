
export default function Produltos() {

  return (
    <div>
        <h1>Produltos</h1>
        <div>
                <h2>Cadastro de Produltos</h2>
            <form>
                <div>
                    <label htmlFor="idNn">Eletrodomestico</label>
                    <input type="text" name="eletrodomestico" id="idNn" value="" placeholder="digite o eletrodomestico" required/>
                </div>
                <div>
                    <label htmlFor="idMa">Marca</label>
                    <input type="text" name="marca" id="idMa" value="" placeholder="digite a marca" required/>
                </div>
                <div>
                    <label htmlFor="idEf">Eficiencia energetica</label>
                    <input type="text" name="eficiencia_energetica" id="idEf" value="" placeholder="digite a eficiencia Energetica" required/>
                </div>
                <div>
                    <label htmlFor="idCs">Consumo energetico</label>
                    <input type="number" name="consumo_energetica" id="idCs" value="" placeholder="digite a consumo Energetica" required/>
                </div>
                <div>
                    <label htmlFor="idCpf">CPF</label>
                    <input type="number" name="cpf_cliente" id="idCpf" value="" placeholder="digite o cpf" required/>
                </div>
            </form>
        </div>
    </div>
  )
}
