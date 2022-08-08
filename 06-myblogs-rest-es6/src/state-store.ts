import { Post } from "./posts.js";
import { FormState, ValidationConfig, Validators } from "./validate.js";

export interface AppState {
    editedPost: Post | undefined;
    allPosts: Post[],
    postFormValidationConfig: ValidationConfig<Post>,
    postFormErrors: string[],
    postFormState: FormState<Post>
}

export const AppStateStore: AppState = {
    editedPost: undefined,
    allPosts: [],
    postFormValidationConfig: {
        title: [Validators.required(), Validators.pattern('^[A-Za-z]{5}-[0-9]{2}'), Validators.len(3, 10)],
        authorId: [Validators.required(), Validators.len(1,6)],
        content: [Validators.required(), Validators.len(10, 250)],
        imageUrl: [Validators.required(), Validators.pattern('^(ftp|http|https):\/\/[^ "]+$')],
        tags: [Validators.required(), Validators.pattern('[A-Za-z0-9]+([,\s]+[A-Za-z0-9]+)+')]
    },
    postFormErrors: [],
    postFormState: {}
}