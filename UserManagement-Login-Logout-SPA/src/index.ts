import { User, idType, formFieldDict } from "./user";
// import { BOOKS_API } from "./google-books-client.js";

// async function showBooksFromInput() {
//   const posts = document.getElementById("posts") as HTMLElement;
//   const input = document.getElementById("booksName") as HTMLFormElement;

//   try {
//     const booksName = input.value != "" ? input.value : "react native";
//     input.value = "";
//     posts.innerHTML = "";
//     const books: Book[] = await BOOKS_API.getBooks(booksName, 9);
//     books.forEach((book) => {
//       const innerHtml = innerHtmlCode(book);
//       posts.insertAdjacentHTML("beforeend", innerHtml);
//       addFavListener(book);
//     });
//   } catch (err) {
//     console.log(`Error:`, err);
//   }
// }

// showBooksFromInput();

// async function addFavListener(user: User) {
//   const favBtnsCollection = document.getElementsByClassName("favBtnHolder");
//   const favBtns = [...favBtnsCollection];
//   const favBtn = favBtns[favBtns.length - 1];

//   if (!book.checkFav) {
//     const books: Book[] | undefined = await BooksRepo.findAll();
//     if (books) {
//       books.forEach((BookElem) => {
//         if (BookElem.id === book.id) {
//           favBtn.innerHTML = `<img src="img/heart.png" class="favBtn">`
//           return;
//         }
//       });
//     }
//     book.checkFav = true;
//   }

//   favBtn.addEventListener("click", () => {
//     const heartBtn = favBtn.childNodes[0] as HTMLElement;
//     if (heartBtn.className.length > 6) {
//       favBtn.innerHTML = `<img src="img/heart.png" class="favBtn">`;
//       BooksRepo.create(book);
//     } else {
//       favBtn.innerHTML = `<img src="img/heart.png" class="favBtn hoverFavBtn">`;
//       BooksRepo.delete(book.id);
//     }
//   })

// }

// async function showUserPage() {
//     const indexBanner = document.getElementById("index-banner") as HTMLElement;
//     const users: User[] | undefined = await UsersRepo.findAll();
//     if (users) {
//       users.forEach((user) => {
//         const innerHtml = innerHTMLUser(user);
//         indexBanner.insertAdjacentHTML("beforeend", innerHtml);
//       });
//     }
// }

function innerHTMLUser(user: User) {
    return `
    <article class="article">
    <div class="title">
        <h3>${user.firstName} ${user.lastName}</h3>
    </div>
    
    <img src="${user.imageUrl}"></img>

    <summary class="summary">
        <span>Username: ${user.username}</span>
        <span>Gender: ${user.gender}</span>
        <span>Role: ${user.userRole}</span>
        <span>Description: ${user.description}</span>
        <span>Status: ${user.status}</span>
        <span>Registration Date: ${user.registrationTimestamp}</span>
        <span>Last Modification: ${user.modificationTimestamp}</span>
    </summary>
        
</article>
    `;
}

function showSignin() {
    const indexBanner = document.getElementById("index-banner") as HTMLElement;
    indexBanner.innerHTML = `
        <div class="container">
            <h1 class="header center orange-text">Sign in</h1>

            <div class="row">
                <form id="add-post-form" class="col s12">
                    <div class="row">
                        <input id="id" name="id" hidden>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="fName" name="fName" type="text" class="validate" required>
                            <label for="fName">First Name</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Write your first name</span>
                        </div>
                        <div class="input-field col s6">
                            <input id="lName" name="lName" type="text" class="validate" required>
                            <label for="lName">Last Name</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Write your last name</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="uName" name="uName" type="text" class="validate" required>
                            <label for="uName">Username</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Write your username</span>
                        </div>
                        <div class="input-field col s6">
                            <input id="pWord" name="pWord" type="password" class="validate" required>
                            <label for="pWord">Password</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Write your password</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="gender" name="gender" type="text" class="validate" required>
                            <label for="gender">Gender</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Choose your gender from Male, Female and Other</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="imageUrl" name="imageUrl" type="url" class="validate">
                            <label for="imageUrl">Blog Image URL</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Write the URL of the blog image</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="shortDescription" name="shortDescription" type="text" class="shortDescription">
                            <label for="shortDescription">Short Description</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Write a short description</span>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="submit">Sign in</button>
                </form>
            </div>
        </div>
    `;
  }

  function showLogin() {
    const indexBanner = document.getElementById("index-banner") as HTMLElement;
    indexBanner.innerHTML = `
    <div class="container">
            <h1 class="header center orange-text">Login</h1>

            <div class="row">
                <form id="add-post-form" class="col s12">
                    <div class="row">
                        <input id="id" name="id" hidden>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="uName" name="uName" type="text" class="validate" required>
                            <label for="uName">Username</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Write your username</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="pWord" name="pWord" type="password" class="validate" required>
                            <label for="pWord">Password</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Write your password</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="cpWord" name="cpWord" type="password" class="validate" required>
                            <label for="cpWord">Confirm Password</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Write again your password</span>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="submit">Login</button>
                </form>
            </div>
        </div>
    `;
  }

  /*function getPostFormSnapshot(): User {
    const formData = new FormData(this.addPostForm);
    const np: formFieldDict<string> = {};
    formData.forEach((value, key) => {
      np[key] = value.toString();
    })
    return new User(parseInt(np.id), np.firstName, np.lastName, np.username, np.password, np.gender, np.userRole, np.imageUrl, np.description, np.status, np.registrationTimestamp, np.modificationTimestamp);
  }

  function validateForm = (event: Event) => {
    const validationResult: ValidationResult<User> = {};
    const config = AppStateStore.postFormValidationConfig;
    const formSnapshot = getPostFormSnapshot();
    let field: keyof ValidationConfig<User>;
    for (field in config) {
      const validator = config[field];
      if(validator !== undefined) {
        try{
          if(Array.isArray(validator)) {
            for(const correct of validator) {
              try {
                correct(formSnapshot[field]!.toString(), field);
              } catch(err){
                if(validationResult[field] === undefined) {
                  validationResult[field] = [] as Array<string>;
                }
                validationResult[field]!.push(err as string);
              }
             
            }
          }
          else {
            validator(formSnapshot[field]!.toString(), field);
          }
        } catch(err) {
          validationResult[field] = [err as string];
        }
      }
    }
    showValidationErrors(validationResult);
  }

  function showValidationErrors(validationResult: ValidationResult<User>) {
    AppStateStore.postFormErrors = [];
    let field: keyof ValidationResult<User>;
    for (field in validationResult) {
      const filedErrors = validationResult[field];
      if (filedErrors !== undefined) {
        for (const err of filedErrors) {
          AppStateStore.postFormErrors.push(`${field} -> ${err}<br>`);
        }
      }
    }
    showError(AppStateStore.postFormErrors.join(""));
  }
}

function showError(err: any) {
    const erorrsDiv = document.getElementById("errors")!;
    if(!err) {
      erorrsDiv.innerHTML = ''
    } else {
      erorrsDiv.innerHTML = `<div>${err}</div>`;
    }
  }

*/
function init() {
    showSignin();
// const addPostForm = document.getElementById("add-post-form")! as HTMLFormElement;
// addPostForm.addEventListener('change', validateForm(), true);

  const navbarSigninBtn = document.getElementById('signinPageBtn') as HTMLElement;
  navbarSigninBtn.addEventListener("click", () => {
    showSignin();
  });

  const navbarLoginBtn = document.getElementById('loginPageBtn') as HTMLElement;
  navbarLoginBtn.addEventListener("click", () => {
    showLogin();
  });
}

init();


/////////////


// import { Change, FormFieldState, Status, ValidationConfig, ValidationResult } from './validate';
// import { AppStateStore } from './state-store.js';
// import { UsersAPI } from './users-api-client.js';

// class BlogsController {
//   postsSection = document.getElementById("posts")!;
//   erorrsDiv = document.getElementById("errors")!;
//   protected addPostForm = document.getElementById("add-post-form")! as HTMLFormElement;

//   async init() {
//     this.addPostForm.addEventListener('submit', this.handleSubmitPost);
//     this.addPostForm.addEventListener('change', this.validateForm, true);

//     try {
//       const allUsers = await UsersAPI.getAllUsers();
//       AppStateStore.allPosts = allUsers;
//       this.showUsers(allUsers);
//     } catch (err) {
//       this.showError(err);
//     }
//   }
  
//   showUsers(users: User[]) {
//     users.forEach(user => this.addUserDOM(user));
//   }

//   showError(err: any) {
//     if(!err) {
//       this.erorrsDiv.innerHTML = ''
//     } else {
//       this.erorrsDiv.innerHTML = `<div>${err}</div>`;
//     }
//   }

//   addUserDOM(user: User) {
//     const postElem = document.createElement('article');
//     postElem.setAttribute('id', user.id!.toString());
//     postElem.className = "col s12 m6 l4";
//     this.updateArticleInnerHtml(postElem, user);
//     this.postsSection.insertAdjacentElement("beforeend", postElem);
//   }

//   updateUserDOM(user: User) {
//     const userElem = document.getElementById(user.id!.toString())!;
//     this.updateArticleInnerHtml(userElem, user);
//   }

//   private updateArticleInnerHtml(userElem: HTMLElement, user: User) {
//     userElem.innerHTML = `
//     <article class="article">
//     <div class="title">
//         <h3>${user.firstName} ${user.lastName}</h3>
//     </div>
    
//     <img src="${user.imageUrl}"></img>

//     <summary class="summary">
//         <span>Username: ${user.username}</span>
//         <span>Gender: ${user.gender}</span>
//         <span>Role: ${user.userRole}</span>
//         <span>Description: ${user.description}</span>
//         <span>Status: ${user.status}</span>
//         <span>Registration Date: ${user.registrationTimestamp}</span>
//         <span>Last Modification: ${user.modificationTimestamp}</span>
//     </summary>
        
// </article>
//       `;
//   }

//   fillPostForm(user: User) {
//     let field: keyof User;
//     for (field in user) {
//       (document.getElementById(field) as HTMLFormElement).value = user[field];
//       const label = document.querySelector(`#add-post-form label[for=${field}]`);
//       if (label) {
//         label.className = 'active';
//       }
//     }
//   }


//   handleSubmitPost = async (event: SubmitEvent) => {
//     try {
//       event.preventDefault();
//       const post = this.getPostFormSnapshot();
//       // const post = newPost as unknown as Post;
//       if (post.id) {
//         const updated = await UsersAPI.updateUser(post);
//         this.updateUserDOM(updated);
//         AppStateStore.editedPost = undefined;
//       } else {
//         const created = await UsersAPI.addNewUser(post);
//         this.addUserDOM(created);
//       }
//       this.resetForm();
//     } catch (err) {
//       this.showError(err);
//     }
//   }

//   getPostFormSnapshot(): User {
//     const formData = new FormData(this.addPostForm);
//     const np: formFieldDict<string> = {};
//     formData.forEach((value, key) => {
//       np[key] = value.toString();
//     })
//     return new User(parseInt(np.id), np.firstName, np.lastName, np.username, np.password, np.gender, np.userRole, np.imageUrl, np.description, np.status, np.registrationTimestamp, np.modificationTimestamp);
//   }

// //   resetForm = () => {
// //     if (AppStateStore.editedPost) {
// //       this.fillPostForm(AppStateStore.editedPost);
// //     } else {
// //       this.addPostForm.reset();
// //     }
// //   }

//   validateForm = (event: Event) => {
//     const validationResult: ValidationResult<User> = {};
//     const config = AppStateStore.postFormValidationConfig;
//     const formSnapshot = this.getPostFormSnapshot();
//     let field: keyof ValidationConfig<User>;
//     for (field in config) {
//       const validator = config[field];
//       if(validator !== undefined) {
//         try{
//           if(Array.isArray(validator)) {
//             for(const correct of validator) {
//               try {
//                 correct(formSnapshot[field]!.toString(), field);
//               } catch(err){
//                 if(validationResult[field] === undefined) {
//                   validationResult[field] = [] as Array<string>;
//                 }
//                 validationResult[field]!.push(err as string);
//               }
             
//             }
//           }
//           else {
//             validator(formSnapshot[field]!.toString(), field);
//           }
//         } catch(err) {
//           validationResult[field] = [err as string];
//         }
//       }
//     }
//     this.showValidationErrors(validationResult);
//   }

//   showValidationErrors(validationResult: ValidationResult<User>) {
//     AppStateStore.postFormErrors = [];
//     let field: keyof ValidationResult<User>;
//     for (field in validationResult) {
//       const filedErrors = validationResult[field];
//       if (filedErrors !== undefined) {
//         for (const err of filedErrors) {
//           AppStateStore.postFormErrors.push(`${field} -> ${err}<br>`);
//         }
//       }
//     }
//     this.showError(AppStateStore.postFormErrors.join(""));
//   }
// }


// const blogsController = new BlogsController();

// blogsController.init();