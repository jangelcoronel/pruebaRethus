import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './layout/content/content.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './commons-components/header/header.component';
import { FormsModule } from '@angular/forms';
import { LangLanguageModule } from './lang-language/lang-language.module';
import { SelectLangComponent } from './commons-components/select-lang/select-lang.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ContentComponent,
    HeaderComponent,
    SelectLangComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    AngularMaterialModule,
    RouterModule,
    LangLanguageModule,
  ],
  exports: [
    ContentComponent,
    RouterModule,
    LangLanguageModule,
    SelectLangComponent
  ]
})
export class SharedModule { }
