"use client";

import { apiLink } from "@/app/api";
import { useState } from "react";
import Image from "next/image";
import AppLogo from "@/app/ui/logo";
import Tick from "@/app/ui/payment_success/tickAnim";

import Link from "next/link";
import { Router, useRouter } from "next/navigation";
import axios from "axios";

export default function PaymentSec({ user }) {
  return (
    <div className="my-8 md:my-28 max-w-6xl mx-auto px-2">
      {"65dadfed4f55cc9363c750e4" !== user?.selectedCourses[0]?.courseId ? (
        <div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl text-center font-bold my-2">
              Transform Your Lives
            </h2>
            <p className="w-full md:w-2/3 text-md text-center my-2">
              Become a Part at Courses for Carrer. Do check the Pricing Page
              once and read all the Instructions. The price charged Below is a
              token Money for Help you and us!
            </p>
          </div>
          <div className="flex justify-around items-center gap-5 flex-wrap md:flex-nowrap">
            <Box
              top="Power BI - with Courses for careers"
              desp=""
              price={4999}
              arrTick={[
                "Bonuses upto ₹3000",
                "Free Power BI Master Guides",
                "Job Assitance to a BI Analyst",
                "Power BI Templates to Lucky Winners"
              ]}
              arrMinus={[]}
              arrPlus={["100% Job preparation and assistance"]}
              courseId="65dadfed4f55cc9363c750e4"
              disabled={false}
            />
            <Box
              top="Power BI Question Bank"
              desp=""
              price={5499}
              arrTick={[
                "Bonuses upto ₹3000",
                "Free Power BI Master Guides",
              ]}
              arrMinus={[]}
              arrPlus={[
                "100% PL-300 assurance",
                "100% moneyback guarantee",
                "100% Job preparation and assistance"
              ]}
              courseId="65dadfed4f55cc9363c750e4"
              disabled={true}
            />
            {/* <Box
            top="Pro"
            desp="Nunc arcu et eget tellus nunc quis gravida est ullamcorper orci scelerisque."
            price={30000}
            arrTick={[
              "Proin gravida nibh vel velit auctor",
              "Bibendum auctor nisi elit consequat",
              "Ipsum nec sagittis sem nibh elit",
              "Sollicitudin lorem quis id",
              "Duis sed odio sit amet",
              "Orci sit gravida vestibulum",
              "Pretium nibh lobortis egestas",
              "Dolor purus tincidunt",
            ]}
            arrMinus={[]}
            arrPlus={[]}
          />
          <Box
            top="Team"
            desp="Nunc arcu et eget tellus nunc quis gravida est ullamcorper orci scelerisque."
            price={50000}
            arrTick={[
              "Proin gravida nibh vel velit auctor",
              "Bibendum auctor nisi elit consequat",
              "Ipsum nec sagittis sem nibh elit",
              "Sollicitudin lorem quis id",
              "Duis sed odio sit amet",
              "Orci sit gravida vestibulum",
              "Pretium nibh lobortis egestas",
              "Dolor purus tincidunt",
            ]}
            arrMinus={[]}
            arrPlus={["Sem cursus proin", "Condimentum morbi"]}
          /> */}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

function Box({
  top,
  desp,
  price,
  arrTick,
  arrMinus,
  arrPlus,
  courseId,
  disabled,
}) {
  const [PaymentSuccess, setPaymentStatus] = useState(false);
  const router = useRouter();
  const tickTemp = arrTick.map((item, ind) => (
    <div key={ind} className="flex flex-row my-2">
      <Image src="/Icons/tick-circle.svg" height="20" width="20" alt="Icon" />
      <p className="text-slate-500 ml-2 ">{item}</p>
    </div>
  ));
  const minusTemp = arrMinus.map((item, ind) => (
    <div key={ind} className="flex flex-row my-2">
      <Image src="/Icons/minus-circle.svg" height="20" width="20" alt="Icon" />
      <p className="text-slate-300 ml-2 ">{item}</p>
    </div>
  ));
  const plusTemp = arrPlus.map((item, ind) => (
    <div key={ind} className="flex flex-row my-2">
      <Image src="/Icons/tick-circle-red.svg" className="" height="20" width="20" alt="Icon" />
      <p className="text-red-600 ml-2 font-bold">{item}</p>
    </div>
  ));
  //payment starts here
  // const amount = 5000;
  const [amount, setamount] = useState(price);

  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    if (localStorage.getItem("user") === null) {
      router.push("/auth/login");
      return;
    }
    const response = await fetch(apiLink + "/pay/order", {
      method: "POST",
      body: JSON.stringify({
        amount: amount * 100,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();

    var options = {
      key: process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount, // amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Courses For Career", //your business name
      description: "Purchase Course",
      image:
        "https://coursesforcareers.tech/_next/image?url=%2Fcolour_logo.png&w=256&q=75",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(apiLink + "/pay/order/validate", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonRes = await validateRes.json();
        if (jsonRes.msg == "success") {
          let username = localStorage.getItem("user");
          const response = await axios.post(
            apiLink + "/enroll/" + "65dadfed4f55cc9363c750e4" + "/" + username
          );
          // const response = await axios.post(apiLink + "/enroll");
          if (response.data.message == "success") {
            setPaymentStatus(true);
          }
        }
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3091a4",
      },
      reminder_enable: true,
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  const test = async () => {
    let username = localStorage.getItem("user");
    const response = await axios.post(
      apiLink + "/enroll/" + "65dadfed4f55cc9363c750e4" + "/" + username
    );
    // const response = await axios.post(apiLink + "/enroll");
    if (response.data.message == "success") {
      setPaymentStatus(true);
    }
  };
  const [Code, setCode] = useState("");

  const [CodeSuccess, setCodeSuccess] = useState(false);
  const [CodeFail, setCodeFail] = useState(false);

  const checkDiscount = () => {
    if (Code === "") {
      // alert("please enter valid code");
      setCodeFail(true);
      setamount(4999);
      setCodeSuccess(false);
    } else {
      if (Code === "CHITKARA700") {
        setCodeFail(false);
        setCodeSuccess(true);
        setamount(699);
      } else if (Code == "testcfc#123") {
        setCodeFail(false);
        setCodeSuccess(true);
        setamount(5);
      } else {
        setCodeFail(true);
        setamount(4999);
        setCodeSuccess(false);
      }
    }
  };

  return (
    <div className="w-full md:w-1/2 mt-10 rounded-2xl overflow-hidden shadow-lg relative pb-24 z-0">
      {PaymentSuccess && (
        <div
          className="fixed flex justify-center items-center w-screen h-screen top-0 left-0 z-50 bg-slate-500 bg-opacity-40"
          onClick={() => setPaymentStatus(false)}
        >
          <div
            className="w-full mx-1 md:w-1/2 bg-white rounded-3xl border-2 border-[##3091a4]  flex flex-col justify-center items-center py-8 z-50 "
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Tick />
            <h1 className="text-4xl text-black font-bold">
              Payment Successful !!
            </h1>
            <Link
              href="/courses/65dadfed4f55cc9363c750e4/lecture/1/videos/1"
              className="bg-[#3091a4] text-white text-xl rounded-full py-2 pl-4 my-1 pr-6 group hover:pr-4 duration-300"
            >
              Start Learning{" "}
              <span className="pl-2 group-hover:pl-4 duration-300">&rarr;</span>
            </Link>
            <button
              className="text-lg text-slate-600 hover:text-slate-900 p-4 font-bold mt-4"
              onClick={() => {
                setPaymentStatus(false);
              }}
            >
              &#10007;&nbsp;Close
            </button>
          </div>
        </div>
      )}

      <div className="bg-[#3091a4] p-6">
        <h1 className="font-bold text-bold text-2xl break-words">{top}</h1>
        <h3 className="my-4 text-slate-300">{desp}</h3>
        <h3 className="text-4xl font-bold">
          {/* <span className="text-3xl line-through text-gray-500">
            &#8377; 4999
          </span>{" "} */}
          {amount == 699 ? (
            <div>
              {" "}
              <span className="text-gray-400 line-through">
                {" "}
                &#8377; 4999
              </span>{" "}
              <span className=""> &#8377; 699</span>{" "}
            </div>
          ) : (
            <p>&#8377; {disabled ? "5499" : "4999"}</p>
          )}
        </h3>
      </div>
      <div className="px-4 py-8">
        {plusTemp}
        {tickTemp}
        {minusTemp}
      </div>
      <div className="px-4 py-4 flex flex-wrap box-border">
        {disabled ? (
          <div className="flex justify-center items-stretch gap-4">
            <input
              type="text"
              placeholder="We are launching soon"
              className="h-[50px] box-border border px-2 border-gray-300 rounded "
              value={Code}
              disabled
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
            <button
              className="p-2 bg-[#3091a4] px-6 text-white rounded hover:bg-[#3091a4]"
              onClick={() => {
                checkDiscount();
              }}
              disabled
            >
              Apply coupon
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-stretch gap-4">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              className="h-[50px] box-border border px-2 border-gray-300 rounded-md"
              value={Code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
            <button
              className="p-2 bg-[#3091a4] px-6 text-white rounded-md hover:bg-[#3091a4]"
              onClick={() => {
                checkDiscount();
              }}
            >
              Apply coupon
            </button>
          </div>
        )}
      </div>

      {CodeSuccess ? (
        <div className="text-green-500  text-sm px-6">
          Successfully applied code
        </div>
      ) : (
        <></>
      )}
      {CodeFail ? (
        <div className="text-red-500  text-sm px-6">Code not valid</div>
      ) : (
        <></>
      )}

      <div className="my-6 absolute left-4 bottom-4 group">
        {/* <button
          className="py-2 px-4 rounded-full border-2 border-black pr-6 group-hover:pr-4 duration-300"
          // onClick={paymentHandler}
        >
          We are launching soon{" "}
          <span className="pl-2 group-hover:pl-4 duration-300">&rarr;</span>
        </button> */}
        {/* <button
          onClick={() => {
            test();
          }}
        >
          test
        </button> */}

        {disabled ? (
          <button className="py-2 px-4 rounded-full border-2 border-black duration-300">
            We are coming soon...
          </button>
        ) : (
          <button
            onClick={() => {
              paymentHandler();
            }}
            className="py-2 px-4 rounded-full border-2 border-black duration-300"
          >
            Pay
          </button>
        )}
      </div>
    </div>
  );
}

//
