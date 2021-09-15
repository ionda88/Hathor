import {PostagemPK} from "./postagemPK";

export class Postagem {
  id: PostagemPK = new PostagemPK();
  idTopicoForum: number;
  idUsuario: number;
  deTitulo = "";
  deMensagem = "";
  dtPublicacao: Date;
  deComentario = "";
}
