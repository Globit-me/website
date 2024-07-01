const Dollars: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center md:items-start md:gap-x-28 gap-y-5">
        <div className="flex justify-center">
          <iframe
            className="w-72 h-72 rounded-lg shadow-md border border-gray-400"
            src="https://dolarhoy.com/i/cotizaciones/dolar-blue"
          ></iframe>
        </div>
        <div className="flex justify-center">
          <iframe
            className="w-72 h-72 rounded-lg shadow-md border border-gray-400"
            src="https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio"
          ></iframe>
        </div>
        <div className="flex justify-center">
          <iframe
            className="w-72 h-72 rounded-lg shadow-md border border-gray-400"
            src="https://dolarhoy.com/i/cotizaciones/dolar-mep"
          ></iframe>
        </div>
        <div className="flex justify-center">
          <iframe
            className="w-72 h-72 rounded-lg shadow-md border border-gray-400"
            src="https://dolarhoy.com/i/cotizaciones/dolar-contado-con-liquidacion"
          ></iframe>
        </div>
        <div className="flex justify-center">
          <iframe
            className="w-72 h-72 rounded-lg shadow-md border border-gray-400"
            src="https://dolarhoy.com/i/cotizaciones/bitcoin-usd"
          ></iframe>
        </div>
        <div className="flex justify-center">
          <iframe
            className="w-72 h-72 rounded-lg shadow-md border border-gray-400"
            src="https://dolarhoy.com/i/cotizaciones/banco-nacion"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dollars;
