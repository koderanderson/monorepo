<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $names = [
            'Acme Corp',
            'Globex Industries',
            'Initech Solutions',
            'Umbrella Holdings',
            'Stark Enterprises',
        ];

        foreach ($names as $name) {
            Company::query()->create(['name' => $name]);
        }
    }
}
