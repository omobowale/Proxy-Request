import Layout from "../../commons/Layout";
import { Form, Formik } from "formik";
import CustomInputField from "../../commons/CustomInputField";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import CustomCollapsible from "../../commons/CustomCollapsible";

function Requests() {
  return (
    <Layout>
      <p className="text-left text-[15px] my-4">
        Please complete the form below
      </p>
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values) => {}}
      >
        <Form>
          <CustomCollapsible title="Customer Details">
            <div className="bg-whitesmoke border-t-0 p-6">
              <CustomInputField
                singleLine={true}
                type="text"
                name="workItem"
                placeholder="Enter work item name"
                label="Work Item Name"
              />
              <CustomInputField
                singleLine={true}
                type="text"
                name="previousStage"
                placeholder="Enter previous stage"
                label="Previous Stage"
              />
              <CustomInputField
                singleLine={true}
                type="text"
                name="currentStage"
                placeholder="Enter current stage"
                label="Current Stage"
              />
              <CustomInputField
                singleLine={true}
                type="date"
                name="date"
                placeholder="Date"
                label="Date"
              />
              <CustomInputField
                singleLine={true}
                type="text"
                name="staffId"
                placeholder="Enter initiator staff ID"
                label="Initiator Staff ID"
              />
            </div>
          </CustomCollapsible>
        </Form>
      </Formik>
    </Layout>
  );
}

export default Requests;
