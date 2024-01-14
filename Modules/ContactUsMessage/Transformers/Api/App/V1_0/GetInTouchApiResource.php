<?php

namespace Modules\ContactUsMessage\Transformers\Api\App\V1_0;

use Illuminate\Http\Resources\Json\JsonResource;

class GetInTouchApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'about_email' => isset($this->about_email) ? (string)$this->about_email : '',
            'about_phone' => isset($this->about_phone) ? (string)$this->about_phone : '',
            'about_address' => isset($this->about_address) ? (string)$this->about_address : '',

            // ! Code Added form me
            'facebook' => isset($this->facebook) ? (string)$this->facebook : '',
            'google_plus' => isset($this->google_plus) ? (string)$this->google_plus : '',
            'instagram' => isset($this->instagram) ? (string)$this->instagram : '',
            'youtube' => isset($this->youtube) ? (string)$this->youtube : '',
            'pinterest' => isset($this->pinterest) ? (string)$this->pinterest : '',
            'twitter' => isset($this->twitter) ? (string)$this->twitter : '',
            'about_website' => isset($this->about_website) ? (string)$this->about_website : '',
        ];
    }
}
