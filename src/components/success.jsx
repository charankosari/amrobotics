import { Link ,useLocation,useNavigate} from "react-router-dom";
import forgotpassimg from "./assets/forgotPass.png";
import { useEffect } from "react";

const SuccessPage = () => {
  const location=useLocation()
  const paymentId = new URLSearchParams(location.search).get('message');
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackNavigation = (event) => {
      event.preventDefault();
      navigate('/'); // Redirect to another route if the user tries to go back
    };

    window.addEventListener('popstate', handleBackNavigation);

    return () => {
      window.removeEventListener('popstate', handleBackNavigation);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="text-center text-2xl font-bold mb-10">Your order has been received</h1>
      <div className=" text-center flex flex-col justify-center items-center gap-4">
        <img className="w-40 mb-3" src={forgotpassimg} />
        <h1  className="text-xl font-semibold" >Thank you for your purchase !</h1>
        <p>
          Your OrderID is : <span>{paymentId}</span>
        </p>
        <p  className="text-center" >
          You will receive an order conformation email with the details of your
          order
        </p>
      </div>
      <div  className="mt-3" >
        <Link to="/marketplace" className="text-white p-2 rounded-sm bg-orange-500 ">
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
