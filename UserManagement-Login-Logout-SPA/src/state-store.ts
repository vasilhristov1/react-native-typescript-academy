import { User } from "./user.js";
import { Change, FormFieldState, FormState, Status, ValidationConfig, Validators } from "./validate.js";

export interface AppState {
    editedPost: User | undefined;
    allPosts: User[],
    postFormValidationConfig: ValidationConfig<User>,
    postFormErrors: string[],
    postFormState: FormState<User>
}

export const AppStateStore: AppState = {
    editedPost: undefined,
    allPosts: [],
    postFormValidationConfig: {
        firstName: [Validators.required(), Validators.len(2, 15)],
        lastName: [Validators.required(), Validators.len(2, 15)],
        username: [Validators.required(), Validators.len(5, 15)],
        password: [Validators.required(), Validators.len(8, Infinity)],
        gender: Validators.required(),
        imageUrl: [Validators.required(), Validators.pattern('^(ftp|http|https):\/\/[^ "]+$')],
        description: [Validators.required(), Validators.len(0, 512)],
    },
    postFormErrors: [],
    postFormState: {}
}