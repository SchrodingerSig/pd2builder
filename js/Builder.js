import{SkillMap as t,System as e,DBMap as s}from"./Util.js";import n from"./GUI.js";import o from"./IO.js";import i from"./Language.js";import r from"./Stats.js";export default class l{constructor(i=!1){this.exp={skills:new t,subtrees:{medic:{tier:1,points:0},controller:{tier:1,points:0},sharpshooter:{tier:1,points:0},shotgunner:{tier:1,points:0},tank:{tier:1,points:0},ammo_specialist:{tier:1,points:0},engineer:{tier:1,points:0},breacher:{tier:1,points:0},oppressor:{tier:1,points:0},shinobi:{tier:1,points:0},artful_dodger:{tier:1,points:0},silent_killer:{tier:1,points:0},gunslinger:{tier:1,points:0},revenant:{tier:1,points:0},brawler:{tier:1,points:0}},armor:null,perkDeck:null,throwable:null,deployable:null,deployableSecondary:null},this.stats=new r(this),this.sys=new e(this),this.io=new o(this),this.gui=new n(this),this.dbs=new s([["skills",null],["perk_decks",null],["perk_cards",null],["deployables",null],["throwables",null],["armors",null]]),this.fetchPromises=this.dbs.fetchAll(),this.mobile=i,this.lang}loadLanguage(t,e){this.lang=new i(t,e),document.documentElement.setAttribute("lang",e),document.querySelectorAll("#tab_page_buttons > button").forEach(t=>{t.textContent=this.lang.get(`system.${t.dataset.name}.title`)});for(const t of l.TREES)document.getElementById(`sk_${t}_button`).textContent=this.lang.get(`system.skills.${t}.title`);document.querySelectorAll(".arm_icon > div, .th_icon > div, .dp_icon > div").forEach(t=>t.setAttribute("data-equip",this.lang.get("system.equip"))),document.querySelectorAll(".dp_icon > div").forEach(t=>{t.setAttribute("data-primary",this.lang.get("system.primary")),t.setAttribute("data-secondary",this.lang.get("system.secondary"))});for(const[t]of this.dbs.get("perk_decks")){document.querySelector(`#${t} p`).textContent=this.lang.get(`perk_decks.${t}.name`).toLocaleUpperCase();const e=document.querySelector(`#${t}.pk_selected p`);e&&(e.textContent=`${this.lang.get("system.equipped")}: ${this.lang.get(`perk_decks.${t}.name`).toLocaleUpperCase()}`)}for(const[t]of this.dbs.get("skills"))document.getElementById(t).parentElement.nextElementSibling.textContent=this.lang.get(`skills.${t}.name`).toLocaleUpperCase();document.getElementById("io_copy_btn").textContent=this.lang.get("system.share.copy"),document.getElementById("io_share_button").textContent=this.lang.get("system.share.native"),n.COLOR_PATTERN=new RegExp(this.lang.get("system.colors"),"g"),this.mobile?document.getElementById("sk_tree_buttons").dataset.tree&&(document.querySelector("#sk_tree_buttons > button").textContent=this.lang.get(`system.skills.${document.getElementById("sk_tree_buttons").dataset.tree}.title`).toLocaleUpperCase()):(document.getElementsByClassName("navbar-brand")[0].textContent=this.lang.get("system.name"),document.getElementsByClassName("nav-link")[0].textContent=this.lang.get("system.home"),document.querySelector(".sk_points_remaining > p").innerHTML=this.lang.get("system.skills.remaining")+document.querySelector(".sk_points_remaining p span").outerHTML,document.querySelector("#io_save_r p").textContent=this.lang.get("system.share.description"),document.querySelector("#io_other_r > p").textContent=this.lang.get("system.credits.title"),document.querySelector("#io_other_r > .font-size-16 p:first-child").textContent=this.lang.get("system.credits.p1"),document.querySelector("#io_other_r > .font-size-16 p:last-child").innerHTML=this.lang.get("system.credits.p2")({ref:[t=>`<a href="https://github.com/r-paydaybuilds/pd2builder/blob/master/CONTRIBUTORS.md">${t}</a>`]}),document.querySelector("#io_other_r > .font-size-14").children[0].innerHTML=this.lang.get("system.credits.license")({ref:[t=>`<a href="https://opensource.org/licenses/MIT">${t}</a>`]}),document.querySelector(".io_widgets > p").textContent=this.lang.get("system.credits.reach"))}}l.TREES=["mastermind","enforcer","technician","ghost","fugitive"];
