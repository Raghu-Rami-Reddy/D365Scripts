//Download button

//Custom Save button



//onSave scenario: Disable Company field after record creation
function lockCompanyOnUpdate(executionContext) {
    var formContext = executionContext.getFormContext();

    if (formContext.ui.getFormType() !== 1) {
        formContext.getControl("rogcorp_company").setDisabled(true);
    }
}