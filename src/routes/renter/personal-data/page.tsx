import CustomerForm from "@/components/molecules/CustomerForm";
import { Helmet } from "@modern-js/runtime/head";
import zeroKmImage from "../../../assets/car-rental-ilus.jpg";
import favicon from "../../../assets/favicon.ico";
import Header from "@/components/molecules/Header";

const PersonalData = () => (
  <div className="pt-nano">
    <Helmet>
      <link rel="icon" type="image/x-icon" href={favicon} />
      <title>GoDrive - List your car</title>
    </Helmet>
    <Header />
    <div className="flex w-full md:flex-row flex-col gap-20 sm:min-h-[70vh] justify-center">
      <img
        className="w-full lg:h-[520px] bg-white rounded-[50%]"
        src={zeroKmImage}
        alt="0km car image"
      />
      <CustomerForm />
    </div>
  </div>
);

export default PersonalData;
