import { FaCopy } from "react-icons/fa";

const Table = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            // .then(() => alert("Secret copied to clipboard!"))
            // .catch((err) => console.error("Error copying to clipboard:", err));
    };
    return (
        <div className="">
            <table class="text-[16px] font-normal text-left text-black font-sans">
                <thead className="">
                    <tr className="border-b border-[#e5e7eb]">
                        <th className="px-6 py-3 font-medium text-[#71717a]">DB Nombre</th>
                        <th className="px-6 py-3 font-medium text-[#71717a]">DB Secrets</th>
                        <th className="px-6 py-3 font-medium text-[#71717a]">Estado</th>
                        <th className="px-6 py-3 font-medium text-[#71717a]">Servicio</th>
                        <th className="px-6 py-3 font-medium text-[#71717a]">Gobierno</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-[#e5e7eb]">
                        <td className="text-black font-medium px-6 py-4">FLIGHTDATADB</td>
                        <td className="px-6 py-4" id="secret1">
                            3a1b4c7e9f2d1b6a8c0e2d4f5a7d8e1f3
                            <button onClick={() => copyToClipboard('3a1b4c7e9f2d1b6a8c0e2d4f5a7d8e1f3')}>📋</button>
                        </td>
                        <td className="px-6 py-4">Activo</td>
                        <td className="px-6 py-4">Publico</td>
                        <td className="px-6 py-4">Civil Aviation</td>
                    </tr>
                    <tr className="border-b border-[#e5e7eb]">
                        <td className="text-black font-medium px-6 py-4">AIRLINESDB</td>
                        <td className="px-6 py-4" id="secret2">
                            6d9f2a4b7c1e3d6a8c0e2d4f5a7d8e1f3
                            <button onClick={() => copyToClipboard('6d9f2a4b7c1e3d6a8c0e2d4f5a7d8e1f3')}>📋</button>
                        </td>
                        <td className="px-6 py-4">Activo</td>
                        <td className="px-6 py-4">Privado</td>
                        <td className="px-6 py-4">Ministerio Nacional de Transporte</td>
                    </tr>
                    <tr>
                        <td className="text-black font-medium px-6 py-4">OVER80FLIGHTSDB</td>
                        <td className="px-6 py-4" id="secret3">
                            1b4c7e9f2d1b6a8c0e2d4f5a7d8e1f3c5
                            <button onClick={() => copyToClipboard('1b4c7e9f2d1b6a8c0e2d4f5a7d8e1f3c5')}>📋</button>
                        </td>
                        <td className="px-6 py-4">Inactivo</td>
                        <td className="px-6 py-4">Publico</td>
                        <td className="px-6 py-4">Sernatur</td>
                    </tr>
                </tbody>           
            </table>
        </div>
    )
}

export default Table
