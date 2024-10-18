import { AuthFormProps, SIGN_IN_FORM, SIGN_UP_FORM } from "./forms";
import { LAND_PAGE_MENU, MenuProps } from "./menus";

type GroupleConstantsProps = {
    landingPageMenu: MenuProps[]
        signUpForm: AuthFormProps[]
        signInForm: AuthFormProps[]
      //  groupList: GroupListProps[]
       // createGroupPlaceholder: CreateGroupPlaceholderProps[]
}

export const GROUPLE_CONSTANT:GroupleConstantsProps = {
 landingPageMenu: LAND_PAGE_MENU,
    signUpForm: SIGN_UP_FORM,
   signInForm: SIGN_IN_FORM,
   // groupList:GROUP_LIST,
   // createGroupPlaceholder:CREATE_GROUP_PLACEHOLDER,
}