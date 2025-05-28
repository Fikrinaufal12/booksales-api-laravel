    <?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    return new class extends Migration
    {
        public function up(): void
        {
            Schema::create('books', function (Blueprint $table) {
                $table->id();
                $table->string('title');
                $table->foreignId('author_id')->constrained()->onDelete('cascade');
                $table->foreignId('genre_id')->nullable()->constrained()->onDelete('set null'); // kolom genre_id ditambah
                $table->timestamps();
            });
        }

        public function down(): void
        {
            Schema::dropIfExists('books');
        }
    };
