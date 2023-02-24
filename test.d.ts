// 프로젝트에서 사용하는 타입들을 한 곳에 보관하는 파일임

export type Umur = number;
export interface Orang {
  name: string;
}

// d.ts 파일은 자동으로 글로벌 모듈이 아님(예외적)
// 글로벌 모듈로 만드는 법
// tsconfig.json에서 "typeRoots": ["./types"] 라고 적어주면 됨
