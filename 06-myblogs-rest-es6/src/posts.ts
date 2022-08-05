import { IdType } from "./shared-types.js";
import { NumberIdGenerator, Repository, RepositoryInMemoryImpl } from "./repository.js";

export class PostCreateDto {
    constructor(
        public title: string,
        public content: string,
        public tags: string[],
        public imageUrl: string,
        public authorId: IdType
    ) { }
}

export class Post extends PostCreateDto{
    constructor(
        public id: IdType,
        title: string,
        content: string,
        tags: string[],
        imageUrl: string,
        authorId: IdType
    ) {
        super(title, content, tags, imageUrl, authorId);
    }
}

export interface PostRepository extends Repository<IdType, Post> {
    findByTags(searchTags: string[]): Post[];
    findByTitlePart(titlePart: string): Post[];
    findByAuthorId(authorId: IdType): Post[];
}

export class PostRepositoryImpl extends RepositoryInMemoryImpl<IdType, Post> implements PostRepository {
    findByTags(searchTags: string[]): Post[] {
        return this.findAll().filter(post => post.tags.some(tag => searchTags.includes(tag)));
    }
    findByTitlePart(titlePart: string): Post[] {
        return this.findAll().filter(post => post.title.includes(titlePart));
    }
    findByAuthorId(authorId: number): Post[] {
        return this.findAll().filter(post => post.authorId === authorId);
    }
}
const SAMPLE_POSTS = [
    new Post(0, "New in TypeScript", "TypeScript becomes stricter ...", ['typescript', 'novelties'], "https://humao.gallerycdn.vsassets.io/extensions/humao/rest-client/0.25.0/1655829100763/Microsoft.VisualStudio.Services.Icons.Default", 1),
    new Post(0, "New in ECMAScript", "EcmaScript becomes stricter ...", ['es', 'js'], "https://dz2cdn1.dzone.com/storage/temp/8746383-json-server.png", 2),
    new Post(0, "AsyncComposition", "AsyncComposition becomes stricter ...", ['async', 'ajax'], "https://assets.logitech.com/assets/64683/performance-mouse-mx.png", 3)
]


function testPostRepository() {
    const postRepo: PostRepository = new PostRepositoryImpl(new NumberIdGenerator());
    SAMPLE_POSTS.forEach(post => postRepo.create(post));
    postRepo.findAll().forEach(post => console.log(post));
    console.log('Find by Tags:');
    postRepo.findByTags(['es']).forEach(post => console.log(post));
    console.log('Find by Title:');
    postRepo.findByTitlePart('New').forEach(post => console.log(post));
}

testPostRepository();