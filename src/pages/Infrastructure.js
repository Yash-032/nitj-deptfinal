import { React } from "react";
import { useLocation } from 'react-router-dom';
import useFetch from "../hooks/useFetch";
import Heading from "../components/Heading";
import Loading from "../components/Loading";

function Infrastructure() {
  const url = useLocation();
  const { data, loading } = useFetch(url.pathname + '?q=Infrastructure');
  return (
    <div className='w-[96%] rounded-[9px] border border-[rgba(0,105,140,0.2)] p-2 mx-auto sm:mx-3 mt-[60px] pt-[54px] place-items-center'>
      <Heading name="Infrastructure" />
      {!loading ? <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 sm:m-4 sm:p-2 place-items-center gap-4 antialiased text-gray-900">
        {
          data ? data.map((item, i) => {
            return (
              item.type === "Infrastructure" && <div key={i} className='w-full my-4 sm:mx-4 p-2'>
                <div className="w-full h-60 sm:h-72 border-2 object-cover object-center rounded-lg shadow-md overflow-hidden">
                  <img src={item?.img} alt="..." className="w-full h-full object-cover object-center rounded-lg shadow-md hover:scale-110 duration-500" />
                </div>
                <div className="relative px-4 -mt-8 md:-mt-12">
                  <div className="max-w-fit mx-auto bg-white flex items-center justify-center p-4 md:p-6 rounded-lg shadow-lg">
                    <h4 title={item?.title} className="text-xl font-semibold uppercase leading-tight truncate cursor-pointer">{item?.title}</h4>
                  </div>
                </div>

              </div>
            )
          }) : <h1>Data not Available</h1>
        }
      </div> : <Loading />}

    </div>
  )



}





export default Infrastructure

