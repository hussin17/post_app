<?php

namespace Modules\Core\Http\Requests; use App\Rules\CheckPurchaseCode; use App\Rules\DomainCheck; use Illuminate\Foundation\Http\FormRequest; class UpdateLicenseRequest extends FormRequest { public function rules() { goto SxkFC; elemJ: JP8Wx: goto U5vir; BNT1o: return ["\x62\x61\143\x6b\x65\156\x64\x5f\x75\x72\154" => ["\162\x65\x71\165\x69\162\x65\x64", "\165\x72\154", new DomainCheck()], "\x70\x75\x72\143\150\141\x73\145\x64\137\143\x6f\144\x65" => ["\x72\145\161\x75\x69\x72\145\x64"]]; goto elemJ; Q68F_: return ["\x62\x61\x63\153\x65\156\x64\137\x75\x72\x6c" => ["\162\x65\x71\165\151\x72\x65\x64", "\x75\x72\x6c", "\141\x63\164\151\x76\x65\x5f\x75\x72\154", new DomainCheck()], "\x70\165\162\x63\150\x61\163\145\x64\x5f\143\157\144\x65" => ["\x72\145\161\x75\151\x72\x65\x64", new CheckPurchaseCode()]]; goto GX8Oi; tIYfu: U7yFK: goto BNT1o; GX8Oi: goto JP8Wx; goto tIYfu; SxkFC: if (config("\141\160\160\x2e\x64\x65\x76\145\154\157\160\x6d\145\156\164")) { goto U7yFK; } goto Q68F_; U5vir: } public function authorize() { return true; } }