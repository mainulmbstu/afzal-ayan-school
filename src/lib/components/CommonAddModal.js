"use client";
import Form from "next/form";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import blogBanner from "@/assets/blog.svg";
import { useAuth } from "@/lib/components/context";
import SubmitButton from "@/lib/components/SubmitButton";
import { Axios } from "../helpers/AxiosInstance";
import ProgressBar from "./ProgressBar";
// import { createAction } from "./action";

const CommonAddModal = ({
  buttonName = "Add Item",
  inputs = "",
  createAction,
  type = "",
  api = "",
}) => {
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState("");
  const [progress, setProgress] = useState(0);
  const [inputType, setInputType] = useState("text");
  const router = useRouter();
  const pathname = usePathname();
  const { userInfo } = useAuth();
  let fileType = picture?.type?.split("/")[0];

  const clientAction = async (formData) => {
    if (api) {
      setLoading(true);
      // const data = await createAction(formData);
      let { data } = await Axios.post(api, formData, {
        onUploadProgress: (progressEvent) => {
          const prog = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );
          setProgress(prog);
        },
      });
      setLoading(false);
      if (data?.success) {
        Swal.fire("Success", data?.message, "success");
        setProgress(0);
        router.refresh(pathname);
        setPicture("");
        // toast.success(data?.message);
      } else {
        Swal.fire("Error", data?.message, "error");
        setProgress(0);
        router.refresh(pathname);
        // toast.error(data?.message);
        // toast.error(data?.message);
      }
    } else {
      setLoading(true);
      const data = await createAction(formData);

      setLoading(false);
      if (data?.success) {
        Swal.fire("Success", data?.message, "success");
        router.refresh(pathname);
        setPicture("");
        // toast.success(data?.message);
      } else {
        Swal.fire("Error", data?.message, "error");
        // toast.error(data?.message);
        // toast.error(data?.message);
      }
    }
  };
  let classList = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "PEC",
    "JSC",
    "SSC",
  ];
  let allInput = {
    type: (
      <div className="mt-3">
        <label className="hidden md:block capitalize" htmlFor="uniqueid">
          {type}
        </label>
        <input
          className="input"
          type="text"
          id="type"
          name="type"
          required
          readOnly
          placeholder={`Enter ${type}`}
          defaultValue={type}
        />
      </div>
    ),

    uniqueid: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="uniqueid">
          Unique ID
        </label>
        <input
          className="input"
          type="text"
          id="uniqueid"
          name="uniqueid"
          required
          placeholder="Enter unique id"
        />
      </div>
    ),
    youtube: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="youtube">
          Youtube video ID
        </label>
        <input
          className="input"
          type="text"
          id="youtube"
          name="youtube"
          required
          placeholder="Enter youtube video id"
        />
      </div>
    ),
    className: (
      <div>
        <label className="hidden md:block" htmlFor="className">
          Select Class Name
        </label>
        <select
          // onChange={(e) => roleHandle(e.target.value, id)}
          // defaultValue={'Select Category'}
          name="className"
          className="select  text-lg"
        >
          <option value="">Select Class</option>
          {classList?.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    ),
    name: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="name">
          Name
        </label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter Name"
        />
      </div>
    ),
    title: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="title">
          Title
        </label>
        <input
          className="input"
          type="text"
          id="title"
          name="title"
          required
          placeholder="Enter title"
        />
      </div>
    ),
    caption: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="caption">
          Caption
        </label>
        <input
          className="input"
          type="text"
          id="caption"
          name="caption"
          required
          placeholder="Enter caption"
        />
      </div>
    ),
    news: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="news">
          Write news
        </label>
        <textarea
          rows="5"
          className=" bg-base-300"
          type="text"
          id="news"
          name="news"
          required
          placeholder="Enter news"
        />
      </div>
    ),
    phone: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="phone">
          Phone number
        </label>
        <input
          className="input"
          type="text"
          id="phone"
          name="phone"
          required
          placeholder="Enter phone number"
        />
      </div>
    ),
    email: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter email"
        />
      </div>
    ),
    address: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="address">
          Address
        </label>
        <input
          className="input"
          type="text"
          id="address"
          name="address"
          required
          placeholder="Enter address"
        />
      </div>
    ),
    designation: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="designation">
          Designation
        </label>
        <input
          className="input"
          type="text"
          id="designation"
          name="designation"
          required
          placeholder="Enter designation"
        />
      </div>
    ),
    department: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="department">
          Department
        </label>
        <input
          className="input"
          type="text"
          id="department"
          name="department"
          required
          placeholder="Enter department"
        />
      </div>
    ),

    joiningdate: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="joiningdate">
          Joining date
        </label>
        <input
          onFocus={() => setInputType("date")}
          onBlur={() => setInputType("text")}
          className="input"
          type={inputType}
          id="joiningdate"
          name="joiningdate"
          required
          placeholder="Select joining date"
        />
      </div>
    ),
    file: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="name">
          Select a photo/file (max 3mb)
        </label>
        <input
          onChange={(e) => {
            setPicture(e.target.files[0]);
          }}
          className="input"
          type="file"
          id="file"
          name="file"
        />
      </div>
    ),
    fileMulti: (
      <div className="mt-3">
        <label className="hidden md:block" htmlFor="name">
          Select a photo/file (max 3mb)
        </label>
        <input
          onChange={(e) => {
            setPicture(e.target.files[0]);
          }}
          className="input"
          type="file"
          id="file"
          name="file"
          multiple
        />
      </div>
    ),
  };

  return (
    <div className=" relative z-40">
      {/* The button to open modal */}
      <label
        htmlFor="CreateProductModal"
        className={
          userInfo?.role !== "admin" ? "hidden" : "btn btn-primary mb-2"
        }
      >
        {loading ? "Submitting" : buttonName}
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="CreateProductModal" className="modal-toggle" />
      <div
        className="modal justify-start items-start md:items-center md:justify-center"
        role="dialog"
      >
        <div className="modal-box  max-h-fit mt-10 w-screen py-1">
          <h3 className="text-lg font-bold">{buttonName}</h3>
          <div className=" grid md:grid-cols-1 relative">
            <div className="px-3 mx-auto hidden md:block">
              <Image
                priority={true}
                src={
                  fileType === "image"
                    ? URL.createObjectURL(picture)
                    : fileType === "application"
                      ? "/pdf.png"
                      : blogBanner
                }
                alt="File"
                className="h-40 w-auto object-contain"
                height={200}
                width={200}
              />
            </div>
            <div className="">
              <Form
                action={clientAction}
                className=" py-0   bg-base-300 shadow-lg shadow-blue-300 card dark:text-white"
              >
                {inputs?.map((item, i) => (
                  <div key={i}>{allInput[item]}</div>
                ))}
                <div className=" mb-2 md:mt-3">
                  <ProgressBar progress={progress} color={"bg-blue-400"} />
                  <SubmitButton title={"Submit"} design={"btn-accent"} />
                </div>
              </Form>
            </div>
            <div className="modal-action absolute right-2.5 bottom-2.5">
              <label htmlFor="CreateProductModal" className="btn btn-error">
                Close
              </label>
            </div>
          </div>
          <div className="modal-action md:hidden">
            <label
              htmlFor="CreateProductModal"
              className="btn btn-error absolute right-0 top-0 rounded-full"
            >
              X
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonAddModal;
