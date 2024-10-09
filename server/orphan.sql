/*==============================================================*/
/* Nom de SGBD :  MySQL 5.0                                     */
/* Date de création :  27/08/2024 17:17:22                      */
/*==============================================================*/


drop table if exists ACTIVITE;

drop table if exists ALLOCATION;

drop table if exists ANTECEDENTMEDICAL;

drop table if exists DON;

drop table if exists ENFANT;

drop table if exists MAGASIN;

drop table if exists PARCOURS;

drop table if exists PERSONNEL;

drop table if exists PRATIQUER;

drop table if exists RESSALLOUEES;

drop table if exists RESSOURCE;

/*==============================================================*/
/* Table : ACTIVITE                                             */
/*==============================================================*/
create table ACTIVITE
(
   IDACT                int not null,
   LIBACT               varchar(60),
   DOMACT               varchar(60),
   PERIOACT             date,
   primary key (IDACT)
);

/*==============================================================*/
/* Table : ALLOCATION                                           */
/*==============================================================*/
create table ALLOCATION
(
   IDALLO               int not null,
   IDENF                int not null,
   OBJET                text,
   DATEALLO             date,
   primary key (IDALLO)
);

/*==============================================================*/
/* Table : ANTECEDENTMEDICAL                                    */
/*==============================================================*/
create table ANTECEDENTMEDICAL
(
   IDANT                int not null,
   IDENF                int not null,
   DESCANT              text,
   primary key (IDANT)
);

/*==============================================================*/
/* Table : DON                                                  */
/*==============================================================*/
create table DON
(
   IDDON                int not null,
   DONATEUR             varchar(60),
   DATEDON              date,
   primary key (IDDON)
);

/*==============================================================*/
/* Table : ENFANT                                               */
/*==============================================================*/
create table ENFANT
(
   IDENF                int not null,
   NOMPRENENF           varchar(60),
   DATENAISSENF         date,
   DATEENTREE           date,
   ACCENF               text,
   primary key (IDENF)
);

/*==============================================================*/
/* Table : MAGASIN                                              */
/*==============================================================*/
create table MAGASIN
(
   IDMAG                int not null,
   LIBMAG               text,
   TYPMAG               text,
   QTEMAG               int,
   primary key (IDMAG)
);

/*==============================================================*/
/* Table : PARCOURS                                             */
/*==============================================================*/
create table PARCOURS
(
   IDPARC               int not null,
   IDENF                int not null,
   ANNEE                int,
   NIVEAU               varchar(20),
   ETABLISSEMENT        varchar(100),
   primary key (IDPARC)
);

/*==============================================================*/
/* Table : PERSONNEL                                            */
/*==============================================================*/
create table PERSONNEL
(
   IDPERS               int not null,
   NOMPRENPERS          varchar(60),
   FNCPERS              varchar(60),
   LOGINPERS            varchar(15),
   MDPPERS              varchar(10),
   primary key (IDPERS)
);

/*==============================================================*/
/* Table : PRATIQUER                                            */
/*==============================================================*/
create table PRATIQUER
(
   IDENF                int not null,
   IDACT                int not null,
   primary key (IDENF, IDACT)
);

/*==============================================================*/
/* Table : RESSALLOUEES                                         */
/*==============================================================*/
create table RESSALLOUEES
(
   IDRESSALLO           int not null,
   IDALLO               int not null,
   LIBRESSALLO          varchar(100),
   QTERESSALLO          int,
   primary key (IDRESSALLO)
);

/*==============================================================*/
/* Table : RESSOURCE                                            */
/*==============================================================*/
create table RESSOURCE
(
   ID                   int not null,
   IDPERS               int not null,
   IDDON                int not null,
   IDMAG                int not null,
   LIBRESS              varchar(60),
   TYPRESS              varchar(60),
   QTITERESS            int,
   primary key (ID)
);

alter table ALLOCATION add constraint FK_BENEFICIER foreign key (IDENF)
      references ENFANT (IDENF) on delete restrict on update restrict;

alter table ANTECEDENTMEDICAL add constraint FK_POSSEDER foreign key (IDENF)
      references ENFANT (IDENF) on delete restrict on update restrict;

alter table PARCOURS add constraint FK_SUIVRE foreign key (IDENF)
      references ENFANT (IDENF) on delete restrict on update restrict;

alter table PRATIQUER add constraint FK_PRATIQUER foreign key (IDENF)
      references ENFANT (IDENF) on delete restrict on update restrict;

alter table PRATIQUER add constraint FK_PRATIQUER2 foreign key (IDACT)
      references ACTIVITE (IDACT) on delete restrict on update restrict;

alter table RESSALLOUEES add constraint FK_CORRESPONDRE foreign key (IDALLO)
      references ALLOCATION (IDALLO) on delete restrict on update restrict;

alter table RESSOURCE add constraint FK_CONTENIR foreign key (IDDON)
      references DON (IDDON) on delete restrict on update restrict;

alter table RESSOURCE add constraint FK_DETENIR foreign key (IDMAG)
      references MAGASIN (IDMAG) on delete restrict on update restrict;

alter table RESSOURCE add constraint FK_PARTAGER foreign key (IDPERS)
      references PERSONNEL (IDPERS) on delete restrict on update restrict;

