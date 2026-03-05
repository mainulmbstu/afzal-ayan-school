import { createAction, getAllAction } from "./action";

import ListPage from "./ListPage";
import getBase64 from "@/lib/helpers/plaiceholder";
import CommonAddModal from "@/lib/components/CommonAddModal";

export const metadata = {
  title: "Gallery",
  description: "Gallery page",
};

const Gallery = async ({ searchParams }) => {
  let spms = await searchParams;
  let page = Number((await spms.page) ?? 1);
  let perPage = Number((await spms.perPage) ?? 12);
  // let perPage = Number((await spms["perPage"]) ?? 12);
  let blurData = await getBase64("");

  const data = await getAllAction(page, perPage);
  const entries = data?.success && JSON.parse(data?.list);

  return (
    <div>
      <div className="-z-40">
        <CommonAddModal
          buttonName={"Add youtube video ID"}
          inputs={["youtube"]}
          createAction={createAction}
        />
      </div>
      <h2 className=" uppercase">videos</h2>
      <hr />

      <div>
        <ListPage value={{ entries, data, page, perPage, blurData }} />
      </div>
    </div>
  );
};

export default Gallery;
